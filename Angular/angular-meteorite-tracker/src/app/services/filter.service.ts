import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  private fell = new BehaviorSubject<boolean>(false);
  onlyFell = this.fell.asObservable();

  private important = new BehaviorSubject<boolean>(false);
  onlyImportant = this.important.asObservable();

  private importanceSource = new BehaviorSubject<any[]>([]);
  importanceList = this.importanceSource.asObservable();

  constructor() { }
}
