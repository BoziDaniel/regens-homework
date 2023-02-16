import { Injectable } from '@angular/core';
import { City } from '../data/cities';
import { WEATHER_DATA } from '../data/weather';

export interface WeatherRow {
  date: string;
  time: string;
  temp: number;
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  public getWeatherByCity(town: City): WeatherRow[] {
    let cityWeather = WEATHER_DATA.find(({ city }) => city === town.name);
    return cityWeather!.hourly.time.map((dateString, index) => {
      return {
        date: dateString.slice(0, 10),
        time: dateString.slice(11),
        temp: cityWeather!.hourly.temperature_2m[index],
      };
    });
  }
}
