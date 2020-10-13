
import { stat } from "fs";
import { IAuthState } from "models/iauthstate";
import { Action } from "redux";
import { ActionType, BaseActionTypes } from "store/actions";


const initialState: IAuthState = {
    userProps: {
        username: "",
        forename: "",
        companyId: 0,
        surname: "",
    },
    loggedIn: false,
}

const authReducer = (
    state: IAuthState = initialState,
    action: BaseActionTypes) : IAuthState => {
        switch (action.type) {
            case ActionType.Login:
                return {
                    ...state,
                    userProps: action.payload.userProps,
                    loggedIn: action.payload.loggedIn,
                }
            case ActionType.Logout:
                return {
                    userProps: initialState.userProps,
                    loggedIn: initialState.loggedIn
                }
            default:
                return state;
        }
    }

export default authReducer