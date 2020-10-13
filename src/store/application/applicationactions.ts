import { ActionType, BaseActionTypes, IGetStyleDataAction, IGetWeatherAction, IResetStyleDataAction } from "store/actions"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { RootState } from "store/rootreducer";
import { IStyleData } from "models/istyledata";

export const getStyleDataAsync = (): ThunkAction<Promise<void>, RootState, unknown, IGetStyleDataAction> => {
    return async (dispatch: ThunkDispatch<RootState, {}, IGetStyleDataAction>, getState): Promise<void> => {
        const authState = getState().auth;
        // Authed Service To Return CSS link
        if (authState.loggedIn) {
            const styleLink = getStyleData(authState.userProps.companyId);
            dispatch(
                getStyle(styleLink)
            )
        }
    }
}

export const resetStyleDataAsync = (): ThunkAction<Promise<void>, RootState, unknown, IResetStyleDataAction> => {
    return async (dispatch: ThunkDispatch<RootState, {}, IResetStyleDataAction>, getState): Promise<void> => {
        await dispatch(
            resetStyle()
        )
    }
}

const getStyleData = (companyId: number): IStyleData => {
    switch (companyId) {
        case 1:
            return {
                logoUrl: "https://www.df.eu/typo3conf/ext/project_theme/Resources/Public/Fonts/DF_Logo_GreenBG_desktop.svg",
                backgroundColour: "#bed747",
                textColour: "#005d42",
                border: "1px solid #005d42",
                fontUrl: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;0,900;1,500;1,700;1,900&display=swap",
                fontFamily: "Roboto, Arial, sans-serif"
            }
        case 2:
            return {
                logoUrl: "https://www.heartinternet.uk/assets/img/HeartInternet_Logo_Colour.svg",
                backgroundColour: "#e3e3e3",
                textColour: "#3c3c3b",
                border: "1 px solid #ccc",
                fontUrl:""
            }
        default:
            return {
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/GoDaddy_logo.svg/800px-GoDaddy_logo.svg.png",
                backgroundColour: "red",
                textColour: "white",
                border: "1px solid black",
                fontUrl:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",
                fontFamily: "Varela Round, sans-serif"
            }
    }
}

export const getStyle = (payload: IStyleData): IGetStyleDataAction => {
    return {
        type: ActionType.GetStyleData,
        payload: {...payload},
    }
}

export const resetStyle = (): IResetStyleDataAction => {
    return {
        type: ActionType.ResetStyleData
    }
}