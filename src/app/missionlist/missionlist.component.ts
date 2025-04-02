import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, of } from 'rxjs';

interface Mission{
  flight_number: number,
  mission_name: string,
  launch_year: string,
  details: string,
  rocket: {
      rocket_name: string,
      rocket_type: string
  }
  links: {
      mission_patch_small: string,
      article_link: string,
      wikipedia: string,
      video_link: string
  }
}

@Component({
  selector: 'app-missionlist',
  imports: [RouterOutlet, JsonPipe, HttpClientModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent{
  private http = inject(HttpClient);
  post: any;

  constructor() {
      this.http.get('https://api.spacexdata.com/v3/launches')
          .subscribe(data => {
              this.post = data;
          });
  }
}