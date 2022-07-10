import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { getToken } from '@shared/functions/getToken.function';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExitHomePageGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canExit();
  }

  canExit (): boolean {
    let token: string  = getToken();

    if (token !== '') {
      return false;
    } else {
      return true;
    }
  }
  
}
