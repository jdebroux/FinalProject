import { Injectable } from '@angular/core';
import { ToolRental } from '../models/tool-rental';

@Injectable({
  providedIn: 'root'
})
export class ToolRentalService {

  constructor() { }

  create(toolRental: ToolRental) {
    return null;
    }

    update(id: number, toolRental: ToolRental) {

      return null;
    }

    destroy(id: number) {

      return null;
    }

    index() {

      return null;
    }
}
