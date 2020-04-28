import React from "react";
import { IDocument } from "../contracts/interfaces/IDocument";
import ApiManager from "../managers/ApiManager";
import { Container, Row, Col } from "react-bootstrap";

export class DocumentListComponent extends React.Component<IDocumentListComponentProps, IDocumentListComponentState> {

    constructor(props: IDocumentListComponentProps) {
        super(props);
        this.state = { documents: [] };
    }

    public async componentDidMount(): Promise<void> {
        const api = ApiManager.getInstance();
        const getResponse = await api.get(`workspaces/${this.props.solutionId}/projects/${this.props.projectId}/documents`);
        const documents = await getResponse.json();

        this.setState({ documents });
    }

    public render() {
        return (
            <Container>
                <h2>Documents</h2>
                <Row>
                    <Col>
                        <nav id="navbar-example3" className="navbar navbar-light bg-light">
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link" href="#item-1">Item 1</a>
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link ml-3 my-1" href="#/item-1-1">Item 1-1</a>
                                    <a className="nav-link ml-3 my-1" href="#/item-1-2">Item 1-2</a>
                                </nav>
                                <a className="nav-link" href="#item-2">Item 2</a>
                                <a className="nav-link" href="#item-3">Item 3</a>
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link ml-3 my-1" href="#/item-3-2">Item 3-1</a>
                                    <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
                                    <nav className="nav nav-pills flex-column">
                                        <a className="nav-link ml-4 my-1" href="#/item-3-2-1">Item 3-1</a>
                                        <a className="nav-link ml-4 my-1" href="#item-3-2-1">Item 3-2</a>
                                        <nav className="nav nav-pills flex-column">
                                            <a className="nav-link ml-5 my-1" href="#/item-3-2-1">Item 3-1</a>
                                            <a className="nav-link ml-5 my-1" href="#item-3-2-1">Item 3-2</a>
                                        </nav>
                                    </nav>

                                </nav>
                            </nav>
                        </nav>
                    </Col>
                    <Col>
                        <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
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
                        </div>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default DocumentListComponent;

interface IDocumentListComponentProps {
    solutionId: string;
    projectId: string;
}

interface IDocumentListComponentState {
    documents: IDocument[];
}

