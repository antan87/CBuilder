import ProjectListComponent from "./ProjectListComponent";
import React from "react";

export class SolutionDetailComponent extends React.Component<any> {

    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <ProjectListComponent solutionId={this.props.match.params.id}></ProjectListComponent>
                    </div>
                </div>
            </div>
        );
    }
}
export default SolutionDetailComponent;
