import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SortingMeteoritesPipe } from "./pipes/sorting-meteorites.pipe";
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, SortingMeteoritesPipe, FilterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
