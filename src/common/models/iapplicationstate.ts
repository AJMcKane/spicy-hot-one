import { IUserProps } from "models/iuserprops"
import { IPanelContentDictionary } from "./ipanelcontent"
import { IStyleData } from "./istyledata"

export interface IApplicationState {
    locationApiKey: string;    
    controlPanelContent: IPanelContentDictionary;
    contactNumber: string,
    contactEmail: string,
    styleData: IStyleData;
}