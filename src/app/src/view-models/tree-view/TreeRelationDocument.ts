import { TreeFolder } from "./TreeFolder";
import { TreeDocument } from "./TreeDocument";
import { ITreeRelationGeneric } from "./interfaces/ITreeRelationGeneric";

export class TreeRelationDocument implements ITreeRelationGeneric<TreeFolder, TreeDocument> {
    public parent: TreeFolder | null;
    public node: TreeDocument;

    constructor(_parent: TreeFolder | null, _node: TreeDocument) {
        this.parent = _parent;
        this.node = _node;
    }
}
