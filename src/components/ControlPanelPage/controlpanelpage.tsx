import { IPanelContent, IPanelContentDictionary, PanelContentType } from "models/ipanelcontent";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ContentPanel from "components/ContentPanel/contentpanel";
import WeatherPanel from "components/WeatherPanel/weatherpanel";
import "./controlPanelPage.scss";
import { RootState } from "store/rootreducer";
import { Redirect } from "react-router-dom";

interface IControlPanelStoreProps {
    controlPanelContentDictionary: IPanelContentDictionary,
    loginState: boolean,
}

export interface IControlPanelProps extends IControlPanelStoreProps {}

interface IControlPanelState {}

export class ControlPanelPage extends React.Component<IControlPanelProps, IControlPanelState> {

    public render() {
        if(this.props.loginState === false) {
            return <Redirect to="/login" />
        }
        
        return (
            <Container fluid={true} className="control-panel">
                <Row xs={1} md={2} lg={2} xl={3}>
                    {Object.values(this.props.controlPanelContentDictionary).map((panelContent : IPanelContent) => {
                        switch(panelContent.type){
                            case PanelContentType.WeatherWidget:
                                return <Col className="control-panel-col" key={"contentCol" + panelContent.id}>
                                <WeatherPanel contentPanelId={panelContent.id}/>
                            </Col>
                            default:
                                return <Col className="control-panel-col" key={"contentCol" + panelContent.id}>
                                <ContentPanel contentPanelId={panelContent.id}/>
                            </Col>
                        }                        
                    })}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state: RootState) : IControlPanelStoreProps => {
    return {
        controlPanelContentDictionary: state.application.controlPanelContent,
        loginState: state.auth.loggedIn,
    }
}

export default connect(mapStateToProps)(ControlPanelPage)