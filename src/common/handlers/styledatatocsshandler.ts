import { IStyleData } from "models/istyledata"

enum CSSStyleProperties {
    backgroundColor = "backgroundColor",
    textColor = "color",
    border = "border",
    fontFamily = "fontFamily"
}

export enum StyleProperties {
    backgroundColour = "backgroundColour",
    textColour = "textColour",
    border = "border",
    fontFamily = "fontFamily",
}

export const getCSSFromStyleData = (input: IStyleData, keys?: StyleProperties[]): React.CSSProperties => {
    const outputStyle: React.CSSProperties = {}
    if(!keys) {
        keys = [StyleProperties.backgroundColour, StyleProperties.textColour, StyleProperties.border, StyleProperties.fontFamily];
    }
            
    keys.forEach((key: string) => {
        const val = Reflect.get(input, key);
        const cssProperty = cssPropertyMapping[key]
        Reflect.set(outputStyle, cssProperty, val)
    });

    return outputStyle;
}


const cssPropertyMapping: StringDict = {
    "backgroundColour": CSSStyleProperties.backgroundColor,
    "textColour": CSSStyleProperties.textColor,
    "border": CSSStyleProperties.border,
    "fontFamily": CSSStyleProperties.fontFamily,
}

interface StringDict {
    [id: string]: string,
}