import { Injectable } from '@angular/core';
import { SkillRental } from '../models/skill-rental';

@Injectable({
  providedIn: 'root'
})
export class SkillRentalService {

  constructor() { }

  create(skillRental: SkillRental) {
    return null;
    }

    update(id: number, skillRental: SkillRental) {

      return null;
    }

    destroy(id: number) {

      return null;
    }

    index() {

      return null;
    }
}
