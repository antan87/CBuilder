import { ITreeNode } from "./ITreeNode";

export interface ITreeRelation {
    parent: ITreeNode | null;
    node: ITreeNode;
}