import { Component, OnInit } from "@angular/core";
import { MeteoriteService } from "../services/meteorite.service";
import { FilterService } from "../services/filter.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public meteoritesList = [];
  public importanceList;
  onlyFell: boolean;
  onlyImportant: boolean;
  path: string[] = ["meteorite"];
  order: number = 1;

  constructor(
    private _meteoriteService: MeteoriteService,
    private _filterService: FilterService
  ) { }

  ngOnInit() {
    this._meteoriteService
      .getMeteorites()
      .subscribe(data => (this.meteoritesList = data));


    // this._filterService.onlyFell.subscribe(
    //   onlyFell => (this.onlyFell = onlyFell)
    // );
    // this._filterService.onlyImportant.subscribe(
    //   onlyImportant => (this.onlyImportant = onlyImportant)
    // );

    this._filterService.importanceList.subscribe(
      importanceList => (this.importanceList = importanceList)
    );
  }

  sortColumn(prop: string) {
    this.path = prop.split(".");
    this.order = this.order * -1;
    return false; // do not reload
  }

  setImportance(meteorite) {
    // console.log("id:", meteorite.id);
    let id = meteorite.id;
    if (this.importanceList.includes(id)) {
      let indexOfId = this.importanceList.indexOf(id);
      this.importanceList.splice(indexOfId, 1);
    } else {
      this.importanceList.push(id);
    }

    return false;
  }

}
