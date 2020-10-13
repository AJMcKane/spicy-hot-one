import { IApplicationState } from "models/iapplicationstate"
import { IPanelContentDictionary, PanelContentType } from "models/ipanelcontent"
import { ActionType, BaseActionTypes } from "store/actions";

const generateDefaultPanels = () : IPanelContentDictionary =>{
    const panelContents: IPanelContentDictionary = {};  
    for(let i = 0; i < 6; i++) {
        panelContents[i] = {
            title: "Mock Panel " + i,
            text: "Test",
            logo: "www.google.com",
            id: i,
            type:  i === 0 ? PanelContentType.WeatherWidget : PanelContentType.DefaultWidget
        }    
    }    
    return panelContents;
}

const initialState: IApplicationState = {
    locationApiKey: "877ef63c16719f274c386d7d29daf7b6",
    controlPanelContent: generateDefaultPanels(),
    contactEmail: "antonyjmckane@gmail.com",
    contactNumber: "000111222333",
    styleData: {
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/GoDaddy_logo.svg/800px-GoDaddy_logo.svg.png",
        backgroundColour: "black",
        textColour: "white",
        border: "black",
        fontUrl:"",
        fontFamily: "Arial",
    },
}

const applicationReducer = (
    state: IApplicationState = initialState,
    action: BaseActionTypes) : IApplicationState => {
        switch (action.type) {
            case ActionType.GetStyleData:
                return {
                    ...state,
                    styleData: action.payload,
                }
            case ActionType.ResetStyleData:
                return {
                    ...state,
                    styleData: initialState.styleData
                }
            default:
                return state;
        }
    }

export default applicationReducer