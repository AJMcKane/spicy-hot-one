import { ActionType, BaseActionTypes, IGetWeatherAction } from "store/actions"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { RootState } from "store/rootreducer";
import { IWeatherCollection } from "models/iweathercollection";

export const getWeatherDataAsync = () : ThunkAction<Promise<void>, RootState, unknown, IGetWeatherAction> => {
    return async (dispatch: ThunkDispatch<RootState, {}, IGetWeatherAction>, getState) : Promise<void> => {
        const applicationState = getState().application;  
        // This would all be abstracted away into a service layer      
        await navigator.geolocation.getCurrentPosition(async (position: Position) : Promise<void> => {
            const locationURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + 
                                position.coords.latitude + "&lon=" 
                                + position.coords.longitude 
                                + "&appid=" 
                                + applicationState.locationApiKey 
                                + "&units=metric";
            
            const responseJSON = (await (await fetch(locationURL)).json());
            const weatherData = generateWeatherCollection(responseJSON);
            dispatch(
                getWeatherData(weatherData)
            )
        });
    }
}

const generateWeatherCollection = (responseJSONObject: any) : IWeatherCollection => {
    return {
        weather: responseJSONObject.weather,
        main: responseJSONObject.main,
        name: responseJSONObject.name,
        sys: responseJSONObject.sys,        
    }
}; 

export const getWeatherData = (payload: IWeatherCollection) : IGetWeatherAction => {
    return {        
        type: ActionType.GetWeatherData,
        payload: {...payload},
    }
}



export interface IWeatherConfig {
    iconUrl: string
}

