import ProjectListComponent from "./ProjectListComponent";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export class SolutionDetailComponent extends React.Component<any> {

    public render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ProjectListComponent solutionId={this.props.match.params.id}></ProjectListComponent>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default SolutionDetailComponent;
