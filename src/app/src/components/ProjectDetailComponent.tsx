import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocumentListComponent from "./DocumentListComponent";

export class ProjectDetailComponent extends React.Component<any> {

    public render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <DocumentListComponent solutionId={this.props.match.params.solutionId} projectId={this.props.match.params.id}></DocumentListComponent>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default ProjectDetailComponent;
