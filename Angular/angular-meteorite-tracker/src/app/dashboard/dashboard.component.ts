import { Component, OnInit } from "@angular/core";
import { MeteoriteService } from "../services/meteorite.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public meteoritesList = [];
  public importantList = [];
  onlyFell: boolean = false;
  onlyImportant: boolean = false;
  path: string[] = ["meteorite"];
  order: number = 1;

  constructor(private _meteoriteService: MeteoriteService) {}

  ngOnInit() {
    this._meteoriteService
      .getMeteorites()
      .subscribe(data => (this.meteoritesList = this.sortData(data)));

    // this._importanceService.importantList.subscribe(
    //   importantList => (this.importantList = importantList)
    // );
  }

  sortColumn(prop: string) {
    this.path = prop.split(".");
    this.order = this.order * -1;
    return false; // do not reload
  }

  setImportance(meteorite) {
    // console.log("id:", meteorite.id);
    let id = meteorite.id;
    if (this.importantList.includes(id)) {
      let indexOfId = this.importantList.indexOf(id);
      this.importantList.splice(indexOfId, 1);
    } else {
      this.importantList.push(id);
    }

    return false;
  }

  sortData(data) {
    if (this.onlyFell) {
      const sortedData = [];
      data.forEach(meteorite => {
        if (meteorite.fall === "Fell") {
          sortedData.push(meteorite);
        } else {
          return false;
        }
      });
      console.log("result =", sortedData);
      return sortedData;
    } else if (this.onlyImportant) {
      const sortedData = [];
      data.forEach(meteorite => {
        if (
          this.importantList.length > 0 &&
          this.importantList.includes(meteorite.id)
        ) {
          console.log("meteorite pushed");
          sortedData.push(meteorite);
        } else {
          // show message that there are no values
          console.log("no important meteoites");
          return false;
        }
      });
      console.log("sortedData =", sortedData);
      return sortedData;
    } else {
      return data;
    }
  }
}
