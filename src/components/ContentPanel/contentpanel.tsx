import { IApplicationState } from "models/iapplicationstate";
import { IPanelContent } from "models/ipanelcontent";
import { IStyleData } from "models/istyledata";
import React from "react";
import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { RootState } from "store/rootreducer";
import "./contentPanel.scss";
import { getCSSFromStyleData } from 'handlers/styledatatocsshandler';

interface IControlPanelStoreProps {
    contentPanelData: IPanelContent,
    styleData: IStyleData,
}

interface IContentPanelViewProps {
    contentPanelId: number,
}

interface IContentPanelProps extends IControlPanelStoreProps, IContentPanelViewProps {}

interface IContentPanelState {}

export class ContentPanel extends React.Component<IContentPanelProps, IContentPanelState> {

    public render() {
        return (
            <Container className="content-panel" style={getCSSFromStyleData(this.props.styleData)} key={"panel_" + this.props.contentPanelId} >
                <Card className="content-card">
                    <Card.Title>
                        {this.props.contentPanelData.title}
                    </Card.Title>
                    <Card.Text>
                        {"Hello from panel " + this.props.contentPanelData.id}
                    </Card.Text>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: IContentPanelViewProps) : IControlPanelStoreProps => {
    return {
        contentPanelData: state.application.controlPanelContent[ownProps.contentPanelId],
        styleData: state.application.styleData,
    }
}

export default connect(mapStateToProps)(ContentPanel)