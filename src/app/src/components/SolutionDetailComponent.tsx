import ProjectListComponent from "./ProjectListComponent";
import React from "react";

export class SolutionDetailComponent extends React.Component<any> {

    public render() {
        return (
            <div>
                <div className="Solution overview">
                    <h1>Solution overview</h1>
                    <ProjectListComponent solutionId={this.props.match.params.id}></ProjectListComponent>
                </div>
            </div>
        );
    }
}
export default SolutionDetailComponent;
