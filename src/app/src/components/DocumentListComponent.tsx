import React from "react";
import { IDocument } from "../contracts/interfaces/IDocument";
import { IMethodSyntax } from "../contracts/interfaces/IMethodSyntax";
import { getTree } from "../helpers/DocumentHelper";
import ApiManager from "../managers/ApiManager";
import { ITree } from "../view-models/tree-view/interfaces/ITree";
import { ITreeNode2 } from "../view-models/tree-view/interfaces/ITreeNode2";

export class DocumentListComponent extends React.Component<IDocumentListComponentProps, IDocumentListComponentState> {

    constructor(props: IDocumentListComponentProps) {
        super(props);
        this.state = { documents: [], tree: { nodes: [] }, currentDocument: null, isMethodSyntaxExpanded: false };
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
            <div className="container-fluid document-list">
                <div className="row">
                    <div className="col">
                        <h2>Documents</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col tree-box">
                        <nav id="navbar-example3" className="navbar navbar-light ">
                            {this.renderTreeNodes(this.state.tree.nodes, 2)}
                        </nav>
                    </div>
                    <div className="col-6">
                        <form>
                            <textarea
                                className="form-control"
                                placeholder={this.state.currentDocument?.content}
                                rows={this.state.currentDocument?.content.split(/\r\n|\r|\n/).length}>
                            </textarea>
                        </form>
                    </div>
                    <div className="col">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link"
                                            onClick={() => this.onMethodSyntaxPanelClicked()}>
                                            Methods
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className={`collapse ${!!this.state.isMethodSyntaxExpanded ? "show" : ""}`} >
                                    <div className="card-body">
                                        <ul className="list-group">
                                            {this.state.currentDocument?.methods.map((method: IMethodSyntax, index: number) => {
                                                return <li className="list-group-item" key={index}>{method.identifier}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    private renderTreeNodes(nodes: ITreeNode2[], spacing: number): any {
        debugger;
        if (!nodes.length) {
            return [];
        }

        return <nav className="nav nav-pills flex-column" key={nodes[0].id} >
            {nodes.map((item, index) =>
                this.renderTreeNode(item, spacing)
            )}
        </nav>
    }

    private onTreeItemClicked(id: string) {
        const foundDocument = this.state.documents.find(item => item.id === id);
        if (!foundDocument) {
            this.setState({ documents: this.state.documents, tree: this.state.tree, currentDocument: null });
            return;
        }

        this.setState({ documents: this.state.documents, tree: this.state.tree, currentDocument: foundDocument });

    }

    private onMethodSyntaxPanelClicked() {
        const expanded = !this.state.isMethodSyntaxExpanded;
        this.setState({ documents: this.state.documents, tree: this.state.tree, currentDocument: this.state.currentDocument, isMethodSyntaxExpanded: expanded });

    }

    private renderTreeNode(node: ITreeNode2, spacing: number): any {
        const elements = [];
        elements.push(
            <button key={node.id}
                className={`nav-link ml-${spacing.toString()} my-1`}
                onClick={() => this.onTreeItemClicked(node.id)}> {node.name}
            </button >);

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
    tree: ITree;
    currentDocument: IDocument | null;
    isMethodSyntaxExpanded: boolean;
}
