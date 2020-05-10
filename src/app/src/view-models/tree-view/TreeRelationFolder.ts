import { TreeFolder } from "./TreeFolder";
import { ITreeRelationGeneric } from "./interfaces/ITreeRelationGeneric";

export class TreeRelationFolder implements ITreeRelationGeneric<TreeFolder, TreeFolder> {
    public parent: TreeFolder | null;
    public node: TreeFolder;

    constructor(_parent: TreeFolder | null, _node: TreeFolder) {
        this.parent = _parent;
        this.node = _node;
    }
}
