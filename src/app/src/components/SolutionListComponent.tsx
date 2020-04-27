import React from "react";
import { IWorkspace } from "../contracts/interfaces/IWorkspace";
import ApiManager from "../managers/ApiManager";
import { Container, Row, Col, ListGroup, ListGroupItem, NavLink } from 'react-bootstrap';

export class SolutionListComponent extends React.Component<ISolutionListComponentProps, ISolutionListComponentState> {

    constructor(props: ISolutionListComponentProps) {
        super(props);
        this.state = { solutions: [] };
    }

    public async componentDidMount(): Promise<void> {
        const api = ApiManager.getInstance();
        const getResponse = await api.get(`workspaces`);
        const solutions = await getResponse.json();
        this.setState({ solutions });
    }

    public render() {
        return (
            <Container>
                <h2>Solutions</h2>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.state.solutions.map((workspace: IWorkspace) => {
                                return <ListGroupItem key={workspace.solution.id}>
                                    <NavLink href={`#/solutions/${workspace.solution.id}`}>{workspace.solution.name}</NavLink>
                                </ListGroupItem>;
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default SolutionListComponent;

interface ISolutionListComponentProps {
}


interface ISolutionListComponentState {
    solutions: IWorkspace[];
}