import { Injectable } from '@angular/core';
import { UserSkill } from '../models/user-skill';

@Injectable({
  providedIn: 'root'
})
export class UserSkillService {

  constructor() { }

  create(userSkill: UserSkill) {
    return null;
    }

    update(id: number, userSkill: UserSkill) {

      return null;
    }

    destroy(id: number) {

      return null;
    }

    index() {

      return null;
    }
}
