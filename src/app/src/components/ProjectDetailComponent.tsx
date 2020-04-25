import DocumentListComponent from "./DocumentListComponent";
import React from "react";

export class ProjectDetailComponent extends React.Component<any> {

    public render() {
        return (
            <div>
                <div className="Project overview">
                    <div>
                        <h1>Project overview</h1>
                        <div>
                            <DocumentListComponent solutionId={this.props.match.params.solutionId} projectId={this.props.match.params.id}></DocumentListComponent>
                        </div>
                    </div>
                </div>
                <h4>{window.location.href}</h4>
            </div>
        );
    }
}
export default ProjectDetailComponent;
