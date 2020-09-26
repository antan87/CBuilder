import { IDocument } from "../contracts/interfaces/IDocument";
import { TreeRelationFolder } from "../view-models/tree-view/TreeRelationFolder";
import { TreeFolder } from "../view-models/tree-view/TreeFolder";
import { ITreeRelation } from "../view-models/tree-view/interfaces/ITreeRelation";
import { TreeRelationDocument } from "../view-models/tree-view/TreeRelationDocument";
import { TreeDocument } from "../view-models/tree-view/TreeDocument";
import { ITree } from "../view-models/tree-view/interfaces/ITree";
import { ITreeNode2 } from "../view-models/tree-view/interfaces/ITreeNode2";

export function getTree(documents: IDocument[]): ITree {
    const map = aggregateTree(documents);
    const tree = constructTree(map);

    return tree;
}

function constructTree(map: Map<number, ITreeRelation[]>): ITree {
    const array = map.get(0);
    if (!array) {
        return { nodes: [] };
    }

    const tree: ITree = { nodes: [] };
    const index = 1;
    for (const item of array) {
        const newNode: ITreeNode2 = { id: item.node.id, name: item.node.name, childs: [] };
        handleTreeLevel(newNode, index, map);
        tree.nodes.push(newNode);
    }

    return tree;
}

function handleTreeLevel(parent: ITreeNode2, index: number, map: Map<number, ITreeRelation[]>) {
    const array = map.get(index);
    if (!array) {
        return;
    }
    const newIndex = ++index;

    for (const item of array.filter((x) => x?.parent?.id === parent.id)) {
        const newNode: ITreeNode2 = { id: item.node.id, name: item.node.name, childs: [] };
        handleTreeLevel(newNode, newIndex, map);
        parent.childs.push(newNode);
    }
}

function aggregateTree(documents: IDocument[]): Map<number, ITreeRelation[]> {
    const map: Map<number, ITreeRelation[]> = new Map<number, ITreeRelation[]>();
    for (const document of documents) {
        let index = 0;
        let folderRelation: TreeRelationFolder | null = null;
        let parents: string = "";
        for (const folder of document.folders) {
            const node: TreeFolder | null = !!folderRelation ? folderRelation.node : null;
            parents += folder;
            const id = hash(parents).toString();
            folderRelation = new TreeRelationFolder(node, new TreeFolder(id, folder));
            const hasIndex = map.has(index);
            if (!hasIndex) {
                const nodes: ITreeRelation[] = [folderRelation];
                map.set(index, nodes);
            } else {
                const folderId = folderRelation?.node.id;
                const foundFolder = map.get(index)?.some(x => x.node?.id === folderId);
                if (!foundFolder) {
                    map.get(index)?.push(folderRelation);
                }
            }

            index++;
        }

        const folderNode: TreeFolder | null = !!folderRelation ? folderRelation.node : null;
        const documentRelation: TreeRelationDocument = new TreeRelationDocument(folderNode, new TreeDocument(document.id, document.name));;
        if (!map.has(index)) {
            const nodes: ITreeRelation[] = [documentRelation];
            map.set(index, nodes);
        } else {
            map.get(index)?.push(documentRelation);
        }
    }

    return map;
}

function hash(stringValue: string): number {
    var hash = 0, i, chr;
    for (i = 0; i < stringValue.length; i++) {
        chr = stringValue.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }

    return hash;
}
