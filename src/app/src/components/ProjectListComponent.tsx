import React from "react";
import ApiManager from "../managers/ApiManager";
import { Container, Row, Col, ListGroup, ListGroupItem, NavLink } from 'react-bootstrap';
import { IProject } from "../contracts/interfaces/IProject";

export class ProjectListComponent extends React.Component<IProjectListComponentProps, IProjectListComponentState> {

    constructor(props: IProjectListComponentProps) {
        super(props);
        this.state = { projects: [] };
    }

    public async componentDidMount(): Promise<void> {
        const api = ApiManager.getInstance();
        const getResponse = await api.get(`workspaces/${this.props.solutionId}/projects`);
        const projects = await getResponse.json();

        this.setState({ projects });
    }


    public render() {
        return (
            <Container>
                <h2>Projects</h2>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.state.projects.map((project: IProject) => {
                                return <ListGroupItem key={project.id}>
                                    <NavLink href={`#/workspaces/${this.props.solutionId}/projects/${project.id}`}>{project.name}</NavLink>
                                </ListGroupItem>;
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default ProjectListComponent;

interface IProjectListComponentProps {
    solutionId: string;
}

interface IProjectListComponentState {
    projects: IProject[];
}

