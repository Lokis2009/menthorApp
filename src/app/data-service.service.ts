import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  userList = new BehaviorSubject(<any>[]);

  constructor() {
  }

  getUserList() {
    this.userList.next([
      {id: 1, name: 'Vova', email: 'vova15@gmail.com'},
      {id: 2, name: 'Petia', email: 'Petia@gmail.com'},
      {id: 3, name: 'Innokentij', email: 'Innokentij@gmail.com'},
      {id: 4, name: 'Paraska', email: 'Paraska@gmail.com'}
    ]);
    return this.userList;
  }
}
