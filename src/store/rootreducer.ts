import { IApplicationState } from "models/iapplicationstate";
import { IAuthState } from "models/iauthstate";
import { IWeatherState } from "models/iweatherstate";
import { combineReducers } from "redux";
import weatherReducer from "store/weather/weatherreducer";
import applicationReducer from "./application/applicationreducer";
import authReducer from "./auth/authreducer";

export interface RootState {
    weather: IWeatherState
    application: IApplicationState
    auth: IAuthState
}

export default combineReducers<RootState>({
    weather: weatherReducer,
    application: applicationReducer,
    auth: authReducer,
})