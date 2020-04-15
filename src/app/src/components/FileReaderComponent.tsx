import React from 'react';
import { IWorkspace } from '../contracts/interfaces/IWorkspace';

export class FileReaderComponent extends React.Component<IFileReaderComponentProps> {

  public async onchange(e: any): Promise<void> {
    const path = escape(e.target.files[0].path);
    const response = await fetch(`https://localhost:44354/workspaces?filePath=${path}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'application/json',
        }
      });

    const workspace: IWorkspace = await response.json();
    this.props.onWorkspaceLoaded(workspace);
  }

  render() {
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