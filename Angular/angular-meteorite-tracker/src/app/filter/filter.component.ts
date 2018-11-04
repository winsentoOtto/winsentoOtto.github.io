import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  public importantList = [];

  // onlyFell: boolean = false;
  // onlyImportant: boolean = false;

  constructor() {}

  ngOnInit() {}
}
