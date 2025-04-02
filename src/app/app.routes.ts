import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { TestlistComponent } from './test/test.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
    {path: "missions", component: MissiondetailsComponent},
    {path: "missionlist", component: MissionlistComponent},
    {path: "test", component: TestlistComponent}
];
