import { Meteorite } from "../interfaces/meteorites";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortingMeteorites"
})
export class SortingMeteoritesPipe implements PipeTransform {
  transform(
    meteorites: Meteorite[],
    path: string[],
    order: number = 1
  ): Meteorite[] {
    if (!meteorites || !path || !order) return meteorites;

    return meteorites.sort((a: Meteorite, b: Meteorite) => {
      // if (path[0] == "mass") {
      //   path.forEach(property => {
      //     a = parseInt(a[property]);
      //     b = parseInt(b[property]);
      //   });
      // } else {
        path.forEach(property => {
          a = a[property];
          b = b[property];
        });
      // }

      return a > b ? order : order * -1;
    });
  }
}
