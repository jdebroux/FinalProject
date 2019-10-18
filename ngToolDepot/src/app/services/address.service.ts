import { Injectable } from '@angular/core';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor() {}

  create(address: Address) {
    return null;
  }

  update(id: number, address: Address) {
    return null;
  }

  destroy(id: number) {
    return null;
  }

  index() {
    return null;
  }
}
