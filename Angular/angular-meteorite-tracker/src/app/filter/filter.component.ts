import { Component, OnInit } from "@angular/core";
import { MeteoriteService } from "../services/meteorite.service";
import { FilterService } from "../services/filter.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  // public meteoritesList = [];
  public importanceList;
  onlyFell: boolean;
  onlyImportant: boolean;

  constructor(
    // private _meteoriteService: MeteoriteService,
    private _filterService: FilterService
  ) { }

  ngOnInit() {

    // this._meteoriteService
    //   .getMeteorites()
    //   .subscribe(data => (this.meteoritesList = data));

    this._filterService.importanceList.subscribe(
      importanceList => (this.importanceList = importanceList)
    );
  }

}
