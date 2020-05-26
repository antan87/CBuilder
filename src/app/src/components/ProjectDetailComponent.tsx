import React from "react";
import DocumentListComponent from "./DocumentListComponent";

export class ProjectDetailComponent extends React.Component<any> {

    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <DocumentListComponent solutionId={this.props.match.params.solutionId} projectId={this.props.match.params.id}></DocumentListComponent>
                    </div>
                </div>
            </div >
        );
    }
}
export default ProjectDetailComponent;
