import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserDetails} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public getUsers(): Observable<UserDetails[]> {
    return of([
      {
        id: '1',
        name: 'Jane Hew',
        role: 'admin',
        companyName: 'FFFFFFFFF',
        email: 'admin@FFFFFFFF.com',
        status: 'active',
        createdAt: '2020-06-07'
      },
      {
        id: '2',
        name: 'Axel Pittman',
        role: 'admin',
        companyName: 'GGGGGGG',
        email: 'admin@GGGGGGG.com',
        status: 'inactive',
        createdAt: '2020-06-07'
      },
      {
        id: '3',
        name: 'Sophia Fernandez',
        role: 'admin',
        companyName: 'HHHHHHHHH',
        email: 'admin@HHHHHHHHH.com',
        status: 'active',
        createdAt: '2020-06-07'
      },
      {
        id: '4',
        name: 'Bob Nilson',
        role: 'admin',
        companyName: 'DDDDDDDDD',
        email: 'admin@DDDDDDDD.com',
        status: 'inactive',
        createdAt: '2020-06-07'
      },
      {
        id: '5',
        name: 'Jessica Nilson',
        role: 'admin',
        companyName: 'QQQQQQQQ',
        email: 'admin@QQQQQQQQSS.com',
        status: 'active',
        createdAt: '2020-06-07'
      }
    ]);
  }
}
