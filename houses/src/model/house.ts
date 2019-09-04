import {CoOrdinate} from './co-ordinate';
import {Params} from './params';

export class House {
  coords: CoOrdinate;
  params: Params;
  street: string;
  distance: number;

  constructor() {
    this.coords = new CoOrdinate();
    this.params = new Params();
    this.street = '';
    this.distance = 0;
  }
}
