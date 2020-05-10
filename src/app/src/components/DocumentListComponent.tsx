import React from "react";
import { IDocument } from "../contracts/interfaces/IDocument";
import ApiManager from "../managers/ApiManager";
import { Container, Row, Col } from "react-bootstrap";
import { getTree } from "../helpers/DocumentHelper";
import { ITree } from "../view-models/tree-view/interfaces/ITree";
import { ITreeNode2 } from "../view-models/tree-view/interfaces/ITreeNode2";

export class DocumentListComponent extends React.Component<IDocumentListComponentProps, IDocumentListComponentState> {

    constructor(props: IDocumentListComponentProps) {
        super(props);
        this.state = { documents: [], tree: { nodes: [] } };
    }

    public async componentDidMount(): Promise<void> {
        const api = ApiManager.getInstance();
        const getResponse = await api.get(`workspaces/${this.props.solutionId}/projects/${this.props.projectId}/documents`);
        const documents: IDocument[] = await getResponse.json();

        const tree: ITree = getTree(documents);

        this.setState({ documents, tree });
    }





    public render() {
        return (
            <Container>
                <h2>Documents</h2>
                <Row>
                    <Col>
                        <nav id="navbar-example3" className="navbar navbar-light bg-light">
                            {this.renderTreeNodes(this.state.tree.nodes, 2)}
                        </nav>
                    </Col>
                    <Col>
                        {/* <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                            <h4 id="item-1">Item 1</h4>
                            <p>...</p>
                            <h5 id="item-1-1">Item 1-1</h5>
                            <p>...</p>
                            <h5 id="item-1-2">Item 1-2</h5>
                            <p>...</p>
                            <h4 id="item-2">Item 2</h4>
                            <p>...</p>
                            <h4 id="item-3">Item 3</h4>
                            <p>...</p>
                            <h5 id="item-3-1">Item 3-1</h5>
                            <p>...</p>
                            <h5 id="item-3-2">Item 3-2</h5>
                            <p>...</p>
                        </div> */}
                    </Col>
                </Row>
            </Container >
        );
    }

    private renderTreeNodes(nodes: ITreeNode2[], spacing: number): any {
        if (!nodes.length) {
            return [];
        }

        return <nav className="nav nav-pills flex-column">
            {nodes.map((item, index) =>
                this.renderTreeNode(item, spacing)
            )}
        </nav>

    }

    private renderTreeNode(node: ITreeNode2, spacing: number): any {
        const ss = [];
        ss.push(<a key={node.id} className={`nav-link ml-${spacing.toString()} my-1`} href="#item - 1" > {node.name}</a >);
        console.log(spacing);
        if (!!node.childs) {
            spacing += 1;
            ss.push(this.renderTreeNodes(node.childs, spacing));
        }

        return ss;
    }

}

export default DocumentListComponent;

interface IDocumentListComponentProps {
    solutionId: string;
    projectId: string;
}

interface IDocumentListComponentState {
    documents: IDocument[];
    tree: ITree
}

