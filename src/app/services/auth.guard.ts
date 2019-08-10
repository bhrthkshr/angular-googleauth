import { AuthService } from '../services/auth.service';
// import { auth } from 'firebase';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
//  CanActivateChild, CanLoad 
{

  constructor(
    private auth: AuthService,
    private router: Router
  ){}


  canActivate(): Observable<boolean>{
    return this.auth.user$.pipe(
      take(1),map(user => !!user), //--map to boolean
      tap(loggedIn => {
        if(!loggedIn){
          console.log('access denied');
          this.router.navigate(['/']);
        }
      })
    )
  }

}
