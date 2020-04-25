import React from 'react';
import { IDocument } from "../contracts/interfaces/IDocument";
import ApiManager from "../managers/ApiManager";

export class DocumentListComponent extends React.Component<IDocumentListComponentProps, IDocumentListComponentState> {

    constructor(props: IDocumentListComponentProps) {
        super(props);
        this.state = { documents: [] };
    }

    public async componentDidMount(): Promise<void> {
        const api = ApiManager.getInstance();
        const getResponse = await api.get(`workspaces/${this.props.solutionId}/projects/${this.props.projectId}/documents`);
        const documents = await getResponse.json();

        this.setState({ documents });
    }


    public render() {
        return (
            <div className="DocumentListComponent">
                <div>
                    <h3>Documents</h3>
                    <ul>
                        {this.state.documents.map((document: IDocument) => {
                            return <li key={document.id}>
                                <h3>{document.name}</h3>
                            </li>;
                        })}
                    </ul>
                </div>
            </div >
        );
    }
}

export default DocumentListComponent;

interface IDocumentListComponentProps {
    solutionId: string;
    projectId: string;
}

interface IDocumentListComponentState {
    documents: IDocument[];
}

