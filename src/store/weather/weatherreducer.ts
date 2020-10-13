import { ActionType, BaseActionTypes, IGetWeatherAction , } from "store/actions"
import { IWeatherState } from "models/iweatherstate"


const initialState: IWeatherState = {
    weatherData: {
        name: "Anon",
        weather: [{
            description: "none",
            icon: "10d",
            id: 0,
            main: "Rain"
        }],
        main: {
            temp: 10
        },
        sys: {
            country: "GB",
        },    
    },
    weatherConfig: {
        iconUrl: "http://openweathermap.org/img/wn/"
    }    
}

const weatherReducer = (
    state: IWeatherState = initialState,
    action: BaseActionTypes) : IWeatherState => {
        switch (action.type) {
            case ActionType.GetWeatherData:
                return { 
                    ...state,
                    weatherData: action.payload
                }
            default:
                return state;
        }
    }

export default weatherReducer