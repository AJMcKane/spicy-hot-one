import { IApplicationState } from "models/iapplicationstate";
import { IPanelContent } from "models/ipanelcontent";
import { IStyleData } from "models/istyledata";
import { IWeatherCollection } from "models/iweathercollection";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { getCSSFromStyleData } from "handlers/styledatatocsshandler";
import { IGetWeatherAction } from "store/actions";
import { RootState } from "store/rootreducer";
import { getWeatherDataAsync, IWeatherConfig } from "store/weather/weatheractions";
import './weatherPanel.scss';

interface IWeatherPanelStoreProps {
    panelData: IPanelContent,
    weatherData: IWeatherCollection,
    weatherConfig: IWeatherConfig,
    styleData: IStyleData
}

interface IWeatherPanelDispatchProps {
    getWeatherData: () => void;
}

interface IWeatherPanelViewProps {
    contentPanelId: number,
}

interface IWeatherPanelProps extends IWeatherPanelStoreProps, IWeatherPanelViewProps, IWeatherPanelDispatchProps { }

interface IWeatherPanelState { }

export class WeatherPanel extends React.Component<IWeatherPanelProps, IWeatherPanelState> {
    constructor(props: IWeatherPanelProps) {
        super(props);
        props.getWeatherData();
    }

    public render() {
        return (
            <Container className="h-100 weather-panel" key={"panel_" + this.props.contentPanelId} style={getCSSFromStyleData(this.props.styleData)}>
                <Card className="content-card" onLoad={(e: any) => { console.log("hello") }}>
                    <Row xs={1} sm={2} className="align-items-center weather-row">
                        <Col>
                            <Card.Text className="text-center">
                                <span className="weather-temp-text">{ Math.round(this.props.weatherData.main.temp) }<sup className="weather-temp-symbol">&#8451;</sup></span>
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Img className="weather-icon align-middle" src={this.props.weatherConfig.iconUrl + this.props.weatherData.weather[0].icon + "@2x.png"}/>
                            <Card.Text className="text-center">
                                {this.props.weatherData.name}, {this.props.weatherData.sys.country}
                            </Card.Text>
                        </Col>                        
                    </Row>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: IWeatherPanelViewProps): IWeatherPanelStoreProps => {
    return {
        panelData: state.application.controlPanelContent[ownProps.contentPanelId],
        weatherData: state.weather.weatherData,
        weatherConfig: state.weather.weatherConfig,
        styleData: state.application.styleData,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, IGetWeatherAction>): IWeatherPanelDispatchProps => {
    return {
        getWeatherData: async () => {
            await dispatch(getWeatherDataAsync())
            console.log("Get Weather Called");
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherPanel)