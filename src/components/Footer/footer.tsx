import { spawnSync } from "child_process";
import { IApplicationState } from "models/iapplicationstate";
import { IStyleData } from "models/istyledata";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getCSSFromStyleData, StyleProperties } from "handlers/styledatatocsshandler";
import { RootState } from "store/rootreducer";
import "./footer.scss";

interface IFooterStoreProps {
    contactNumber: string;
    contactEmail: string;
    styleData: IStyleData;
}

interface IFooterViewProps {}

interface IFooterProps extends IFooterStoreProps, IFooterViewProps {}

interface IFooterState {}

export class Footer extends React.Component<IFooterProps, IFooterState> {
    public render() {
        return <Row className="footer fixed-bottom" style={getCSSFromStyleData(this.props.styleData,
            [StyleProperties.backgroundColour, StyleProperties.textColour, StyleProperties.fontFamily])}>
            <Col className="footer-content">
                <Row className="footer-row">
                    <strong className="footer-label">{"Call Us: "}</strong>
                    <span>{this.props.contactNumber}</span>
                </Row>
                <Row className="footer-row">
                    <strong className="footer-label">{"Emails Us: "}</strong>
                    <span>{this.props.contactEmail}</span>
                </Row>
            </Col>
        </Row>
    }
}

const mapPropsFromState = (state: RootState, ownProps: IFooterViewProps) : IFooterStoreProps  => {
    return {
        contactNumber: state.application.contactNumber,
        contactEmail: state.application.contactEmail,
        styleData: state.application.styleData,
    }
}

export default connect(mapPropsFromState)(Footer)

