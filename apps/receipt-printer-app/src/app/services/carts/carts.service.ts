import { Injectable } from '@angular/core';

import { CARTS } from '../../data/carts.data';
import { Cart } from '../../interfaces/carts';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  /**
   * get all carts
   * @return Cart[] CARTS
   * @public
   */
   public getAll(): Cart[] {
    return CARTS;
  }
}
