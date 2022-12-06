import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  /**
   * round up number to the nearest of 0.05
   * @return number result
   * @public
   */
  public roundingUpRule(value: number): number {
    const result = Number((Math.ceil(value * 20) / 20).toFixed(2));
    return result;
  }
}
