import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  create(user: User) {
    return null;
  }

  update(id: number, user: User) {
    return null;
  }

  destroy(id: number) {
    return null;
  }

  index() {
    return null;
  }
}
