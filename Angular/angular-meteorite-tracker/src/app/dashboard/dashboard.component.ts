import { Component, OnInit } from "@angular/core";
import { MeteoriteService } from "../services/meteorite.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public meteoritesList = [];
  public importanceList = [];
  onlyFell: boolean = false;
  onlyImportant: boolean = false;
  path: string[] = ["meteorite"];
  order: number = 1;

  constructor(
    private _meteoriteService: MeteoriteService
    // private _filterService: FilterService
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

    // this._filterService.importanceList.subscribe(
    //   importanceList => (this.importanceList = importanceList)
    // );
  }

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

  fellTrigger() {
    this.onlyFell ? this.onlyFell = false : this.onlyFell = true;
    this.onlyFell ? this.getOnlyFeltMeteorites() : this.ngOnInit();
  };

  importanceTrigger() {
    this.onlyImportant ? this.onlyImportant = false : this.onlyImportant = true;
    this.onlyImportant ? this.getOnlyImportantMeteorites() : this.ngOnInit();
  }

  getOnlyFeltMeteorites() {
    console.log("meteoritesList =", this.meteoritesList);

    const sortedData = [];
    this.meteoritesList.forEach(meteorite => {
      meteorite.fall === "Fell" ? sortedData.push(meteorite) : false;
    })
    console.log("sortedData =", sortedData);

    return this.meteoritesList = sortedData;
  };

  getOnlyImportantMeteorites() {
    const sortedData = [];
    this.meteoritesList.forEach(meteorite => {
      if (
        this.importanceList.length > 0 &&
        this.importanceList.includes(meteorite.id)
      ) {
        sortedData.push(meteorite);
      } else {
        // show message that there are no values
        console.log("no important meteoites");
        return false;
      }
    });
    return this.meteoritesList = sortedData;
  };

  // sortData(data) {
  //   if (this.onlyFell) {
  //     const sortedData = [];
  //     data.forEach(meteorite => {
  //       if (meteorite.fall === "Fell") {
  //         sortedData.push(meteorite);
  //       } else {
  //         return false;
  //       }
  //     });
  //     console.log("result =", sortedData);
  //     return sortedData;
  //   } else if (this.onlyImportant) {
  //     const sortedData = [];
  //     data.forEach(meteorite => {
  //       if (
  //         this.importanceList.length > 0 &&
  //         this.importanceList.includes(meteorite.id)
  //       ) {
  //         console.log("meteorite pushed");
  //         sortedData.push(meteorite);
  //       } else {
  //         // show message that there are no values
  //         console.log("no important meteoites");
  //         return false;
  //       }
  //     });
  //     console.log("sortedData =", sortedData);
  //     return sortedData;
  //   } else {
  //     return data;
  //   }
  // };

}
