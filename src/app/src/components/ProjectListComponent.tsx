import React from "react";
import { Link } from "react-router-dom";
import { IProject } from "../contracts/interfaces/IProject";
import { IWorkspace } from "../contracts/interfaces/IWorkspace";

export class ProjectListComponent extends React.Component<IProjectListComponentProps> {

    public render() {
        return (
            <div className="ProjectListComponent">
                <div>
                    <h3>Projects</h3>
                    <ul>
                        {this.props.workspace.solution.projects.map((project: IProject) => {
                            return <li key={project.id}>
                                <Link to={`/projects/${project.id}`} replace>{project.name}</Link>
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
    workspace: IWorkspace;
}
