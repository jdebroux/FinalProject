import { Injectable } from '@angular/core';
import { ToolPhoto } from '../models/tool-photo';

@Injectable({
  providedIn: 'root'
})
export class ToolPhotoService {

  constructor() { }

  create(toolPhoto: ToolPhoto) {
    return null;
    }

    update(id: number, toolPhoto: ToolPhoto) {

      return null;
    }

    destroy(id: number) {

      return null;
    }

    index() {

      return null;
    }
}
