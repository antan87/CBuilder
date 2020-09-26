import { ITreeRelationGeneric } from "./interfaces/ITreeRelationGeneric";
import { TreeFolder } from "./TreeFolder";

export class TreeRelationFolder implements ITreeRelationGeneric<TreeFolder, TreeFolder> {
    public parent: TreeFolder | null;
    public node: TreeFolder;

    constructor(parent: TreeFolder | null, node: TreeFolder) {
        this.parent = parent;
        this.node = node;
    }
}
