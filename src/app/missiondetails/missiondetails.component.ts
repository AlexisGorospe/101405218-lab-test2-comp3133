import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  imports: [],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {
  private http = inject(HttpClient);
  post: any;

  constructor() {
      this.http.get('https://api.spacexdata.com/v3/launches?launch_year=2020')
          .subscribe(data => {
              this.post = data;
          });
  }

  search() {
    let year = (<HTMLInputElement>document.getElementById("year")).value
    
    this.http.get('https://api.spacexdata.com/v3/launches?launch_year=' + year)
        .subscribe(data => {
            this.post = data;
        });
  }
}
