import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  // onlyImportant: boolean = false;
  // onlyFell: boolean = false;

  constructor() { }

  ngOnInit() { }

  // @Output() onlyImportant = new EventEmitter();
  // @Output() onlyFell = new EventEmitter();
  @Output() onChanged = new EventEmitter();

  onChange(filter) {
    console.log(filter);

    this.onChanged.emit(filter);
  }

}
