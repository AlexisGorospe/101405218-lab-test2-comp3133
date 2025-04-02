import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionlistComponent } from "./missionlist/missionlist.component";
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MissionlistComponent, MissiondetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101405218-lab-test2-comp3133';
}
