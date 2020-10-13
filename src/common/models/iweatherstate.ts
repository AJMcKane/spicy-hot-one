import { IWeatherConfig } from "store/weather/weatheractions";
import { IWeatherCollection } from "./iweathercollection";

export interface IWeatherState {
    weatherData: IWeatherCollection,
    weatherConfig: IWeatherConfig,
}