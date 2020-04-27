import { ApiManager } from "../managers/ApiManager";
import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

export class LoadSolutionComponent extends React.Component<ILoadSolutionComponentProps, ILoadSolutionComponentState> {

  constructor(props: ILoadSolutionComponentProps) {
    super(props);
    this.state = { path: '', isLoading: false, solutionLoadedText: '' };
  }

  public async onchange(e: any): Promise<void> {

    const path = e.target.files[0].path;

    this.setState({ path, isLoading: true });
    const createWorkspaceRequest = { filePath: path };
    const api = ApiManager.getInstance();

    const body = JSON.stringify(createWorkspaceRequest);
    const response = await api.post(`workspaces`, body);
    this.setState({ isLoading: false });
    if (response.ok) {
      this.setState({ solutionLoadedText: 'Solution loaded successfully!' });
    } else {
      this.setState({ solutionLoadedText: 'Solution could not be loaded please try again!' });
    }
  }


  public render() {
    return (
      <Container>
        <h2>Upload solution</h2>
        <Row>
          <Col>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
              </div>
              <div className="custom-file">
                <input type="file" className="custom-file-input" onChange={(e) => this.onchange(e)} id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                <label className="custom-file-label" htmlFor="inputGroupFile01">{this.state.path}</label>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col xs={2.5}>
            {this.state.isLoading ?
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner> : null}
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col xs={2.5}>
            <h2>{this.state.solutionLoadedText}</h2>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default LoadSolutionComponent;

interface ILoadSolutionComponentState {
  path: string;
  isLoading: boolean;
  solutionLoadedText: string;
}

interface ILoadSolutionComponentProps {
}
