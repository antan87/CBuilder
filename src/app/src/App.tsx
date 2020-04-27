import React from "react";
import SolutionListComponent from "./components/SolutionListComponent";

export class App extends React.Component<IAppProps, IAppState> {

  public render() {
    return (
      <div className="App">
        <SolutionListComponent></SolutionListComponent>
      </div>
    );
  }
}

export default App;

interface IAppProps {
  // code related to your props goes here
}

interface IAppState {
}
