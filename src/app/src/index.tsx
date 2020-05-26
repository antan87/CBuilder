import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import LoadSolutionComponent from "./components/LoadSolutionComponent";
import NavigationComponent from "./components/NavigationComponent";
import ProjectDetailComponent from "./components/ProjectDetailComponent";
import { SolutionDetailComponent } from "./components/SolutionDetailComponent";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <div className="row">
        <div className="col">
          <NavigationComponent></NavigationComponent>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Switch>
            <Route path="/loadsolution" component={LoadSolutionComponent} />
            <Route path="/workspaces/:solutionId/projects/:id" component={ProjectDetailComponent} />
            <Route path="/solutions/:id" component={SolutionDetailComponent} />
            <Route path="/" exact component={App} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  </React.StrictMode >,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
