import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Meteorite } from "../interfaces/meteorites";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MeteoriteService {
  private _url: string = "assets/data.json";

  constructor(private http: HttpClient) { }

  getMeteorites(): Observable<Meteorite[]> {
    return this.http.get<Meteorite[]>(this._url);
  }

  getMeteoriteById(id: any): Observable<Meteorite> {
    return of(JSON.parse(this._url).find(meteorite => meteorite.id === id));
  }

}
