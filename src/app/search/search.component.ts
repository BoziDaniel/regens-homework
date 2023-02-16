import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
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
  selectedCity: FormControl<City> = new FormControl(this.cities[0], {nonNullable: true})
  constructor(private searchService: SearchService) {
  }

  public ngOnInit(): void {
  }

  public updateResults(city: City): void {
    this.results = this.searchService.getWeatherByCity(city);
  }
}
