import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  location = {
    city:  'london',
    code : 'uk'
  };
  weather:any;
  value:any;

  constructor(private _weatherService: WeatherService) {

  }


  ngOnInit() {

      this.value = localStorage.getItem('location');

      if (this.value!=null){
          this.location=JSON.parse(this.value);
      }else {
        this.location={
          city:'london',
          code:'uk'

        };
      }

    this._weatherService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather=response;
      }
    );
  }
}
