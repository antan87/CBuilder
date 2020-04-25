import React from "react";
import { IWorkspace } from "../contracts/interfaces/IWorkspace";
import ApiManager from "../managers/ApiManager";
import { Link } from "react-router-dom";

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
            <div className="SolutionListComponent">
                <div>
                    <h3>Solutions</h3>
                    <ul>
                        {this.state.solutions.map((workspace: IWorkspace) => {
                            return <li key={workspace.solution.id}>
                                <Link to={`/solutions/${workspace.solution.id}`} replace>{workspace.solution.name}</Link>
                            </li>;
                        })}
                    </ul>
                </div>
            </div >
        );
    }
}

export default SolutionListComponent;

interface ISolutionListComponentProps {
}


interface ISolutionListComponentState {
    solutions: IWorkspace[];
}