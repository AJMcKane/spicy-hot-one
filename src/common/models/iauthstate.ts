import { IUserProps } from "models/iuserprops"
import { IPanelContentDictionary } from "./ipanelcontent"

export interface IAuthState {
    userProps: IUserProps;
    loggedIn: boolean;
}