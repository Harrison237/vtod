import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable} from 'rxjs';
import { User } from '@core/models/user.class';
import { nullToString } from '@core/functions/sellerLogin/errors.function';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { setHeadersFetch } from '@core/functions/http/headers.function';

@Injectable({
  providedIn: 'root'
})
export class ValidateLoginGuard implements CanActivate {

  constructor(private router: Router, private http:HttpClient) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.validateLogin();
  }

  async validateLogin(): Promise<boolean> {
    
    let message: string = '';
    let token: string = nullToString(sessionStorage.getItem('token'));
    let uri = environment.baseUrl;
    let header = setHeadersFetch(token);

    if(token === '') {
      message = 'Not-token-found';
      this.router.navigateByUrl('/seller/login?error='+message);
      return false;
    }

    try {
      const result = await fetch(uri+'auth/me', {
        method: 'GET',
        headers: header
      });
  
      const asd: {user: User, seller: boolean, administrator: boolean} = await result.json();
  
      if (asd.user === undefined){ 
        message = 'Token-Invalid';
  
        this.router.navigateByUrl('/seller/login?error='+message);
        return false;
      } else {
        return true;
      }
    } catch (e){ 
      message = 'Token-Invalid';
  
      this.router.navigateByUrl('/seller/login?error='+message);
      return false;
    }
  }
}
