import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { TestlistComponent } from './test/test.component';

export const routes: Routes = [
    {path: "mission", component: MissionlistComponent},
    {path: "missiondetails", component: MissionlistComponent},
    {path: "test", component: TestlistComponent}
];
