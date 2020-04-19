import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from 'react-router-dom';
import App from "./App";
import ProjectDetailComponent from "./components/ProjectDetailComponent";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="*">
      <div>
        <Switch>
          <Route path="/projects/:id" component={ProjectDetailComponent} />
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
