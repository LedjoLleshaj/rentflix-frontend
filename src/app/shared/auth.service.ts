// import {Injectable} from '@angular/core';
// import {LS_AUTH_TOKEN, LS_USER_ID} from './constants';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable()
// export class AuthService {
//   constructor() {}

//   saveUserData(token: string) {
//     localStorage.setItem(LS_AUTH_TOKEN, token);
//   }

//   logout() {
//     // Removing user data from local storage and the service
//     localStorage.removeItem(LS_USER_ID);
//     localStorage.removeItem(LS_AUTH_TOKEN);
//     // this.userId = null;

//     // Dispatching to all listeners that the user is not authenticated
//     this._isAuthenticated.next(false);
//   }

//   // autoLogin() {
//   //   const id = localStorage.getItem(LS_USER_ID);

//   //   if (id) {
//   //     this.setUserId(id);
//   //   }
//   // }
// }
