export interface IWeatherCollection {
    weather: IWeatherModel[],
    name: string,
    main: IWeatherMain,
    sys: IWeatherSystemData,
}

interface IWeatherSystemData {
    country: string,
}

interface IWeatherMain {
    temp: number,
}

interface IWeatherModel {
    description: string,
    icon: string,
    id: number,
    main: string,
}