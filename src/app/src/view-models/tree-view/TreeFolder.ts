import { ITreeNode } from "./interfaces/ITreeNode";

export class TreeFolder implements ITreeNode {
    public id: string;
    public name: string;

    constructor(_id: string, _name: string) {
        this.id = _id;
        this.name = _name;
    }
}
