import React from 'react';
import FileReaderComponent from './components/FileReaderComponent';

export class App extends React.Component {
  private f = {
    filePaths: [{
      path: 'Test'
    }]
  };

  render() {
    return (
      <div className="App">
        <h1>CBuilder</h1>
        <FileReaderComponent></FileReaderComponent>
      </div>
    );
  }
}
export default App;
