import React from "react";
import { IWorkspace } from "../contracts/interfaces/IWorkspace";
import { ApiManager } from "../managers/ApiManager";

export class FileReaderComponent extends React.Component<IFileReaderComponentProps> {

  public async onchange(e: any): Promise<void> {
    const path = e.target.files[0].path;

    const createWorkspaceRequest = { filePath: path };
    const api = ApiManager.getInstance();

    const body = JSON.stringify(createWorkspaceRequest);
    const createResponse = await api.post(`workspaces`, body);

    const id = await createResponse.json();
    const getResponse = await api.get(`workspaces?id=${id}`);

    const workspace: IWorkspace = await getResponse.json();
    this.props.onWorkspaceLoaded(workspace);
  }

  public render() {
    return (
      <div className="FileReaderComponent">
        <div>
          <h3>Upload solution</h3>
          <input type="file" name="file" onChange={(e) => this.onchange(e)}></input>
        </div>
      </div>
    );
  }
}

export default FileReaderComponent;

interface IFileReaderComponentProps {
  onWorkspaceLoaded(workspace: IWorkspace): void;
}
