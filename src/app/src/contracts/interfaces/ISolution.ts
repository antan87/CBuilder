import { IProject } from "./IProject";

export interface ISolution {
    id: string;
    name: string;
    projects: IProject[];
}
