import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey : string = "user";
  constructor() { }

  public login(user: string, password: string) : Observable<boolean> {
    if ((user === 'master8@lemoncode.net' && password === '12345678')
      || (user === 'admin' && password === 'test')) {
      if (localStorage.getItem(this.userKey) === null) {
        localStorage.setItem(this.userKey, user);
        console.log('Logged');
      }

      console.log('Already logged');
      return of(true).pipe(delay(2000));
    }

    console.log('Not Logged');
    return of(false).pipe(delay(2000));
  }

  public logout() : void {
    localStorage.removeItem(this.userKey);
  }

  public isLogged() : boolean {
    return localStorage.getItem(this.userKey) != null;
  }

  public getUsername() : string | null {
    return localStorage.getItem(this.userKey);
  }
}
