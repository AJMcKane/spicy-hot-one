
import { ActionType, ILoginAction, ILogoutAction } from "store/actions"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { RootState } from "store/rootreducer";
import { ILoginFormData } from "models/iloginformdata";
import { ILoginData } from "models/ilogindata";
import { getStyleDataAsync, resetStyleDataAsync } from "store/application/applicationactions";

export const loginAsync = (loginPayload : ILoginFormData) : ThunkAction<Promise<void>, RootState, unknown, ILoginAction> => {
    return async (dispatch: ThunkDispatch<RootState, {}, ILoginAction>) : Promise<void> => {
        // This would all be abstracted away into a service layer 
        const user = await getUserFromLoginForm(loginPayload);
        await dispatch(
            login(user)
        )
        await(dispatch(getStyleDataAsync()))
    }
}

const login = (payload: ILoginData) : ILoginAction => {
    return {        
        type: ActionType.Login,
        payload: {...payload},
    }
}

export const logoutAsync = () : ThunkAction<Promise<void>, RootState, unknown, ILogoutAction> => {
    return async (dispatch: ThunkDispatch<RootState, {}, ILogoutAction>) : Promise<void> => {
        await dispatch(
            logout()
        )

        await dispatch(
            resetStyleDataAsync()
        )        
    }
}

const logout = () : ILogoutAction => {
    return {        
        type: ActionType.Logout
    }
}

const getUserFromLoginForm = async (loginPayload: ILoginFormData) : Promise<ILoginData> => {
    switch (loginPayload.username) {
        case "DF" :
            return {
                loggedIn: true,
                userProps: {
                    username: loginPayload.username,
                    forename: "Ant",
                    surname: "DFClient",
                    companyId: 1,
                }
            }
        case "Heart": 
            return {
                loggedIn: true,
                userProps: {
                    username: loginPayload.username,
                    forename: "Ant",
                    surname: "HeartClient",
                    companyId: 2,
                }
            }
        default:
            return {
                loggedIn: false,
                userProps: {
                    username: "",
                    forename: "",
                    surname: "",
                    companyId: 0,
                }              
            }
        }
    }
        

