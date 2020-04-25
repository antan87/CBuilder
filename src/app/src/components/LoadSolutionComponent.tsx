import { ApiManager } from "../managers/ApiManager";
import React from "react";

export class LoadSolutionComponent extends React.Component<ILoadSolutionComponentProps, ILoadSolutionComponentState> {

  constructor(props: ILoadSolutionComponentProps) {
    super(props);
    this.state = { solutionLoaded: false };
  }

  public async onchange(e: any): Promise<void> {
    const path = e.target.files[0].path;

    const createWorkspaceRequest = { filePath: path };
    const api = ApiManager.getInstance();

    const body = JSON.stringify(createWorkspaceRequest);
    const createResponse = await api.post(`workspaces`, body);

    if (createResponse.ok) {
      this.setState({ solutionLoaded: true });
    }

    // const id = await createResponse.json();
    // const getResponse = await api.get(`workspaces/${id}`);

    // const workspace: IWorkspace = await getResponse.json();
  }


  public render() {
    let loadingText = '';

    if (this.state.solutionLoaded) {
      loadingText = 'Solution loaded!'
    }
    return (
      <div className="FileReaderComponent">
        <div>
          <h3>Upload solution</h3>
          <input type="file" name="file" onChange={(e) => this.onchange(e)}></input>
        </div>
        <h2>{loadingText}</h2>
      </div>
    );
  }
}

export default LoadSolutionComponent;

interface ILoadSolutionComponentState {
  solutionLoaded: boolean;
}

interface ILoadSolutionComponentProps {
}
