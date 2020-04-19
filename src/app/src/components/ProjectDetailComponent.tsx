import React from "react";
import { Link } from "react-router-dom";

export class ProjectDetailComponent extends React.Component<any> {

    public render() {
        console.log(this.props);
        return (
            <div className="Project overview">
                <h1>Test</h1>
                <Link to={"/"} replace>Home</Link>
            </div>
        );
    }
}
export default ProjectDetailComponent;
