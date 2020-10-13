import { ILoginData } from "models/ilogindata";
import { IStyleData } from "models/istyledata";
import { IWeatherCollection } from "models/iweathercollection";
import { Action } from "redux";

export enum ActionType {
    GetWeatherData = "GetWeatherData",
    GetStyleData = "GetStyleData",
    ResetStyleData = "ResetStyleData",
    Login = "Login",
    Logout = "Logout",
}

export interface IGetWeatherAction extends Action {
    type: typeof ActionType.GetWeatherData,
    payload: IWeatherCollection
}

export interface IGetStyleDataAction extends Action {
    type: typeof ActionType.GetStyleData,
    payload : IStyleData
}

export interface IResetStyleDataAction extends Action {
    type: typeof ActionType.ResetStyleData
}

export interface ILoginAction extends Action {
    type: typeof ActionType.Login
    payload: ILoginData
}

export interface ILogoutAction extends Action {
    type: typeof ActionType.Logout
}

export type BaseActionTypes = IGetWeatherAction | ILoginAction| ILogoutAction | IGetStyleDataAction | IResetStyleDataAction
