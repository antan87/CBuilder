import React from 'react';
import { IDocument } from "../contracts/interfaces/IDocument";
import ApiManager from "../managers/ApiManager";
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';

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
                        <Accordion defaultActiveKey="0">
                            {
                                this.state.documents.map((document: IDocument) => {
                                    return <Card key={document.id}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={document.id}>
                                                {document.name}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={document.id}>
                                            <Card.Body>
                                                {document.content.split('\n').map((item, index2) => {
                                                    return <span key={document.id + index2}>{item}< br key={document.id + index2} /></span>
                                                })}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                })}
                        </Accordion>
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

