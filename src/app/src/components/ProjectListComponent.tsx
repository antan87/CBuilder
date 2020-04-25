import React from "react";
import { Link } from "react-router-dom";
import { IProject } from "../contracts/interfaces/IProject";
import ApiManager from "../managers/ApiManager";

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
            <div className="ProjectListComponent">
                <div>
                    <h3>Projects</h3>
                    <ul>
                        {this.state.projects.map((project: IProject) => {
                            return <li key={project.id}>
                                <Link to={`/workspaces/${this.props.solutionId}/projects/${project.id}`} replace>{project.name}</Link>
                            </li>;
                        })}
                    </ul>
                </div>
            </div >
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

