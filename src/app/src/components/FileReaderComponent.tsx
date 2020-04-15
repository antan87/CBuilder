import React from 'react';

export class FileReaderComponent extends React.Component {

  private async onchange(e: any): Promise<void> {

    const path = escape(e.target.files[0].path);
    debugger;
    const response = await fetch(`https://localhost:44354/workspaces?filePath=${path}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'application/json',
        }
      });

    debugger;
    const json = await response.json();
    console.log(json);
  }

  render() {
    return (
      <div className="FileReaderComponent">
        <div>
          <h2>Upload solution</h2>
          <input type="file" name="file" onChange={(e) => this.onchange(e)}></input>
        </div>
      </div>
    );
  }
}
export default FileReaderComponent;
