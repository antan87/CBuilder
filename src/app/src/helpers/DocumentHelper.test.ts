import { IDocument } from "../contracts/interfaces/IDocument";
import { getTree } from "./DocumentHelper";

test("Get tree", () => {
    const doc: IDocument = {
        content: "Content",
        folders: ["Test", "Test2"],
        id: "Id",
        methods: [],
        name: "Test.cs",
    };

    const doc2: IDocument = {
        content: "Content 2",
        folders: ["Test", "Test3"],
        id: "Id2",
        methods: [],
        name: "Test2.cs",
    };

    const doc3: IDocument = {
        content: "Content 3",
        folders: ["Test4", "Test3"],
        id: "Id3",
        methods: [],
        name: "Test3.cs",
    };

    const doc4: IDocument = {
        content: "Content 4",
        folders: [],
        id: "Id4",
        methods: [],
        name: "Test4.cs",
    };

    const doc5: IDocument = {
        content: "Content 5",
        folders: ["Test", "Test3"],
        id: "Id5",
        methods: [],
        name: "Test5.cs",
    };

    const doc6: IDocument = {
        content: "Content 6",
        folders: ["Test"],
        id: "Id6",
        methods: [],
        name: "Test6.cs",
    };

    const doc7: IDocument = {
        content: "Content 7",
        folders: ["Test"],
        id: "Id7",
        methods: [],
        name: "Test7.cs",
    };

    const doc8: IDocument = {
        content: "Content",
        folders: ["Test", "Test2", "Test3"],
        id: "Id8",
        methods: [],
        name: "Test8.cs",
    };

    const doc9: IDocument = {
        content: "Content",
        folders: ["Test", "Test2", "Test3"],
        id: "Id9",
        methods: [],
        name: "Test9.cs",
    };
    const tree = getTree([doc, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9]);

    const firstNode = tree.nodes.find(item => item.name === "Test");
    expect(firstNode?.name).toEqual("Test");
    expect(firstNode?.childs.map(x => x.name)).toEqual(["Test2", "Test3", "Test6.cs", "Test7.cs"]);

    const firstNodeFirstInnerNode = firstNode?.childs.find(item => item.name === "Test2");
    expect(firstNodeFirstInnerNode?.name).toEqual("Test2");
    expect(firstNodeFirstInnerNode?.childs.map(x => x.name)).toEqual(["Test.cs", "Test3"]);

    const firstNodeSecondInnerNode = firstNode?.childs.find(item => item.name === "Test3");
    expect(firstNodeSecondInnerNode?.name).toEqual("Test3");
    expect(firstNodeSecondInnerNode?.childs.map(x => x.name)).toEqual(["Test2.cs", "Test5.cs"]);

    const secondNode = tree.nodes.find(item => item.name === "Test4");
    expect(secondNode?.name).toEqual("Test4");
});