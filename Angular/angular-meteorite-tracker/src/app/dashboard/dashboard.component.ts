import { Component, OnInit } from "@angular/core";
import { MeteoriteService } from "../services/meteorite.service";
import { PagerService } from '../services/pager.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public meteoritesList = [];
  public importanceList = [];
  onlyImportant: boolean = false;
  onlyFell: boolean = false;
  path: string[] = ["meteorite"];
  order: number = 1;
  data = [];
  error: boolean = false;

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(
    private _meteoriteService: MeteoriteService,
    private _pagerService: PagerService) { }

  ngOnInit() {
    this._meteoriteService
      .getMeteorites()
      .subscribe(data => (this.meteoritesList = data));

    // initialize to page 1
    this.setPage(1);
  };

  sortColumn(prop: string) {
    this.path = prop.split(".");
    this.order = this.order * -1;
    return false; // do not reload
  };

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
  };

  setFilter(sortParametr: any) {
    this.hideError();
    if (sortParametr == "") {
      return;
    } else if (sortParametr == "fell") {
      this.fellTrigger();
    } else {
      this.importanceTrigger();
    }
  };

  fellTrigger() {
    this.onlyFell ? this.onlyFell = false : this.onlyFell = true;
    this.onlyFell ? this.getOnlyFeltMeteorites() : this.onlyImportant ? this.getOnlyImportantMeteorites() : this.ngOnInit();
  };

  importanceTrigger() {
    this.onlyImportant ? this.onlyImportant = false : this.onlyImportant = true;
    this.onlyImportant ? this.getOnlyImportantMeteorites() : this.onlyFell ? this.getOnlyFeltMeteorites() : this.ngOnInit();
  };

  getOnlyFeltMeteorites() {
    this.hideError();
    // console.log("meteoritesList =", this.meteoritesList);

    const sortedData = [];
    this.meteoritesList.forEach(meteorite => {
      meteorite.fall === "Fell" ? sortedData.push(meteorite) : false;
    })
    // console.log("sortedData =", sortedData);

    return this.meteoritesList = sortedData;
  };

  getOnlyImportantMeteorites() {
    this.hideError();
    const sortedData = [];
    this.meteoritesList.forEach(meteorite => {
      if (
        this.importanceList.length > 0 &&
        this.importanceList.includes(meteorite.id)
      ) {
        sortedData.push(meteorite);
      } else if (this.importanceList.length == 0) {
        // show message that there are no values
        this.showError();
        return false;
      }
    });
    return this.meteoritesList = sortedData;
  };

  showError() {
    this.error = true;
  };

  hideError() {
    if (this.error === true) {
      this.error = false;
    } else {
      return;
    }
  };

  setPage(page: number) {
    // get pager object from service
    this.pager = this._pagerService.getPager(this.meteoritesList.length, page);
    console.log("meteoritesList=", this.meteoritesList);
    console.log("pager=", this.pager);

    // get current page of items
    this.pagedItems = this.meteoritesList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  };

}
