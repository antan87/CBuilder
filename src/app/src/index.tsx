import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from 'react-router-dom';
import App from "./App";
import ProjectDetailComponent from "./components/ProjectDetailComponent";
import * as serviceWorker from "./serviceWorker";
import NavigationComponent from "./components/NavigationComponent";
import LoadSolutionComponent from "./components/LoadSolutionComponent";
import { SolutionDetailComponent } from "./components/SolutionDetailComponent";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <div>
        <NavigationComponent></NavigationComponent>
      </div>
      <div>
        <Switch>
          <Route path="/loadsolution" component={LoadSolutionComponent} />
          <Route path="/workspaces/:solutionId/projects/:id" component={ProjectDetailComponent} />
          <Route path="/solutions/:id" component={SolutionDetailComponent} />
          <Route path="/" exact component={App} />
        </Switch>
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
