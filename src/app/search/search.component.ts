import { Component, OnInit } from "@angular/core";
import { CITIES, City } from "../data/cities";
import { SearchService, WeatherRow } from "./search.service";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {

  cities: City[] = CITIES;
  results: WeatherRow[] = [];

  constructor(private service: SearchService) {
  }

  public ngOnInit(): void {
  }

  public updateResults(city: City): void {
    let results = this.service.getWeatherByCity(city);
    // TODO set results
  }
}
