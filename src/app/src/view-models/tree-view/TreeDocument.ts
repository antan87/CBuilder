import { ITreeNode } from "./interfaces/ITreeNode";

export class TreeDocument implements ITreeNode {
    public id: string;
    public name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
