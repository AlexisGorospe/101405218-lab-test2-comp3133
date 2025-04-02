import { Component, OnInit } from "@angular/core";
import { combineLatest, throwError } from "rxjs";

@Component({
    selector: "app-missionlist",
    templateUrl: "missionlist.component.html"
})
export class MissionlistComponent{
    title = "hi"
    
    async fetchMissions(): Promise<JSON>{
        const response = await fetch("https://api.spacexdata.com/v3/launches");
        if (!response.ok) {
            throw new Error(`error ${response.statusText}`);
        }
        const jsonData: JSON = await response.json();
        return jsonData;
    }
}

    