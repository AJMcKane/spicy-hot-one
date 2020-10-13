export interface IPanelContent {
    id: number,
    title: string,
    text: string,
    logo: string,   
    type: PanelContentType,     
}

export interface IPanelContentDictionary {
    [id: number] : IPanelContent;
}

export enum PanelContentType {
    DefaultWidget,
    WeatherWidget,    
}