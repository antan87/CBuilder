import { IDocument } from "../contracts/interfaces/IDocument";
import { getTree } from "./DocumentHelper";

test("Get tree", () => {
    const doc: IDocument = {
        id: 'Id',
        name: 'Test.cs',
        content: 'Content',
        folders: ['Test', 'Test2']
    };

    const doc2: IDocument = {
        id: 'Id2',
        name: 'Test2.cs',
        content: 'Content',
        folders: ['Test', 'Test3']
    };

    const doc3: IDocument = {
        id: 'Id3',
        name: 'Test3.cs',
        content: 'Content',
        folders: ['Test4', 'Test3']
    };

    const doc4: IDocument = {
        id: 'Id3',
        name: 'Test5.cs',
        content: 'Content',
        folders: []
    };
    const tree = getTree([doc, doc2, doc3, doc4]);

    const firstNode = tree.nodes[0];
    expect(firstNode.name).toEqual('Test');
    expect(firstNode.childs.map(x => x.name)).toEqual(['Test2', 'Test3']);

    const secondNode = tree.nodes[1];
    expect(secondNode.name).toEqual('Test4');
    expect(secondNode.childs.map(x => x.name)).toEqual(['Test3']);

    const thirdNode = tree.nodes[2];
    expect(thirdNode.name).toEqual('Test5.cs');
});