import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  responseData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:7265/WeatherForecast',{ withCredentials: true }).subscribe((data) => {
      this.responseData = data;
    });
  }

  sendcookie(){
    this.http.get('https://localhost:7265/api/Values', { withCredentials: true }).subscribe((data) => {
      console.log("hi")
    });
  }
}
