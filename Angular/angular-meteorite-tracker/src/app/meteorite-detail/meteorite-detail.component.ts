import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Meteorite } from "../interfaces/meteorites";
import { MeteoriteService } from '../services/meteorite.service';


@Component({
  selector: 'app-meteorite-detail',
  templateUrl: './meteorite-detail.component.html',
  styleUrls: ['./meteorite-detail.component.css']
})
export class MeteoriteDetailComponent implements OnInit {
  meteorite: Meteorite;
  public meteoritesList: Meteorite[] = [];

  constructor(
    private route: ActivatedRoute,
    private _meteoriteService: MeteoriteService,
    private location: Location
  ) { }

  ngOnInit() {
    this._meteoriteService
      .getMeteorites()
      .subscribe(data => {
        this.meteoritesList = data;
      });

    this.getMeteorite();
  }

  getMeteorite() {
    const id = this.route.snapshot.paramMap.get("id");
    const list = this.meteoritesList;
    this._meteoriteService.getMeteoriteById(id).subscribe(meteoriteById => (this.meteorite = meteoriteById));
  }

  goBack() {
    this.location.back();
  }

}
