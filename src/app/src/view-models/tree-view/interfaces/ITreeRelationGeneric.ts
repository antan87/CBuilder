import { ITreeNode } from "./ITreeNode";
import { ITreeRelation } from "./ITreeRelation";

export interface ITreeRelationGeneric<TParent extends ITreeNode, TNode extends ITreeNode> extends ITreeRelation {
    parent: TParent | null;
    node: TNode;
}
