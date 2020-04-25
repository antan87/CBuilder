import React from "react";
import { NavLink } from "react-router-dom";

export class NavigationComponent extends React.Component<any> {

    public render() {
        return (
            <div>
                <NavLink to="/" replace>Home</NavLink>
                <NavLink to="/loadsolution" replace>Load solution</NavLink>
            </div>
        );
    }
}

export default NavigationComponent;
