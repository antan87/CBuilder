import React from "react";
import { IDocument } from "../contracts/interfaces/IDocument";
import ApiManager from "../managers/ApiManager";
import { Container, Row, Col, Form, FormControl, Button, Nav } from "react-bootstrap";
import { getTree } from "../helpers/DocumentHelper";
import { ITree } from "../view-models/tree-view/interfaces/ITree";
import { ITreeNode2 } from "../view-models/tree-view/interfaces/ITreeNode2";

export class DocumentListComponent extends React.Component<IDocumentListComponentProps, IDocumentListComponentState> {

    constructor(props: IDocumentListComponentProps) {
        super(props);
        this.state = { documents: [], tree: { nodes: [] }, currentText: '' };
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
            <Container className="document-list">
                <Row>
                    <Col>
                        <h2>Documents</h2>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Nav id="navbar-example3" className="navbar navbar-light ">
                            {this.renderTreeNodes(this.state.tree.nodes, 2)}
                        </Nav>
                    </Col>
                    <Col >
                        <Form>
                            <FormControl
                                readOnly
                                type="text"
                                rows={this.state.currentText.split(/\r\n|\r|\n/).length}
                                placeholder={this.state.currentText}
                                as="textarea" />
                        </Form>

                    </Col>
                </Row>
            </Container >
        );
    }

    private renderTreeNodes(nodes: ITreeNode2[], spacing: number): any {
        if (!nodes.length) {
            return [];
        }

        return <Nav className="nav nav-pills flex-column" key={nodes[0].id} >
            {nodes.map((item, index) =>
                this.renderTreeNode(item, spacing)
            )}
        </Nav>

    }

    private onTreeItemClicked(id: string) {
        const foundDocument = this.state.documents.find(item => item.id === id);
        if (!foundDocument) {
            this.setState({ documents: this.state.documents, tree: this.state.tree, currentText: '' });
            return;
        }
        const currentText = foundDocument.content;
        this.setState({ documents: this.state.documents, tree: this.state.tree, currentText: currentText });

    }

    private renderTreeNode(node: ITreeNode2, spacing: number): any {
        const elements = [];
        // ss.push(<a key={node.id} className={`nav-link ml-${spacing.toString()} my-1`} onClick={() => this.onTreeItemClicked(node.id)}> {node.name}</a >);
        elements.push(<Button key={node.id} className={`nav-link ml-${spacing.toString()} my-1`} onClick={() => this.onTreeItemClicked(node.id)}> {node.name}</Button >);

        if (!!node.childs) {
            spacing += 1;
            elements.push(this.renderTreeNodes(node.childs, spacing));
        }

        return elements;
    }

}

export default DocumentListComponent;

interface IDocumentListComponentProps {
    solutionId: string;
    projectId: string;
}

interface IDocumentListComponentState {
    documents: IDocument[];
    tree: ITree,
    currentText: string
}

