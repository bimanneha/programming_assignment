import {CoOrdinate} from './co-ordinate';
import {Params} from './params';

// Model Class for defining schema of each House
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
