import { ITreeRelationGeneric } from "./interfaces/ITreeRelationGeneric";
import { TreeDocument } from "./TreeDocument";
import { TreeFolder } from "./TreeFolder";

export class TreeRelationDocument implements ITreeRelationGeneric<TreeFolder, TreeDocument> {
    public parent: TreeFolder | null;
    public node: TreeDocument;

    constructor(parent: TreeFolder | null, node: TreeDocument) {
        this.parent = parent;
        this.node = node;
    }
}
