import React from 'react';
import FileReaderComponent from './components/FileReaderComponent';
import { IWorkspace } from './contracts/interfaces/IWorkspace';
import ProjectListComponent from './components/ProjectListComponent';

export class App extends React.Component<IAppProps, IAppState> {


  constructor(props: any) {
    super(props);
    this.state = { workspaceModel: null };
    this.onWorkspaceLoaded = this.onWorkspaceLoaded.bind(this);
  }


  private onWorkspaceLoaded(workspace: IWorkspace): void {
    this.setState({ workspaceModel: workspace });
  }

  render() {
    if (!!this.state && !this.state.workspaceModel) {
      return (
        <div className="App">
          <h1>CBuilder</h1>
          <FileReaderComponent onWorkspaceLoaded={this.onWorkspaceLoaded}></FileReaderComponent>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>CBuilder</h1>
          <ProjectListComponent workspace={this.state.workspaceModel}></ProjectListComponent>
        </div>
      );
    }
  }
}
export default App;

interface IAppProps {
  //code related to your props goes here
}

interface IAppState {
  workspaceModel: any
}

