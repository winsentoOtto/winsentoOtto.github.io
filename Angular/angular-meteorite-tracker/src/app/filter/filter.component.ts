import { Component, OnInit } from "@angular/core";
import { MeteoriteService } from "../services/meteorite.service";
import { FilterService } from "../services/filter.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  public meteoritesList = [];
  public importanceList;
  // public data = [];
  onlyFell: boolean;
  onlyImportant: boolean;

  constructor(
    private _meteoriteService: MeteoriteService,
    private _filterService: FilterService
  ) { }

  ngOnInit() {

    this._meteoriteService
      .getMeteorites()
      .subscribe(meteoritesList => (this.meteoritesList = meteoritesList));

    this._filterService.importanceList.subscribe(
      importanceList => (this.importanceList = importanceList)
    );
  }

  sortData() {
    let data = this.meteoritesList;
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
          this.importanceList.length > 0 &&
          this.importanceList.includes(meteorite.id)
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
