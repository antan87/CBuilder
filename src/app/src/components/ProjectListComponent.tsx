import React from 'react';
import { IWorkspace } from '../contracts/interfaces/IWorkspace';

export class ProjectListComponent extends React.Component<IProjectListComponentProps> {

    render() {
        return (
            <div className="ProjectListComponent">
                <div>
                    <h3>Projects</h3>
                    <ul>
                        {this.props.workspace.solution.projects.map(project => <li key={project.id}>{project.name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProjectListComponent;

interface IProjectListComponentProps {
    workspace: IWorkspace;
}