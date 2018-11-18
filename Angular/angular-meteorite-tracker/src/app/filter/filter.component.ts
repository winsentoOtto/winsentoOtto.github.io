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
  @Output() setFilter: EventEmitter<any> = new EventEmitter();

  onChanged(filter) {
    console.log(filter);
    this.setFilter.emit(filter);
  }

}
