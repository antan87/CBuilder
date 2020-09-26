import { IMethodSyntax } from "./IMethodSyntax";

export interface IDocument {
    id: string;
    name: string;
    folders: string[];
    content: string;
    methods: IMethodSyntax[];
}
