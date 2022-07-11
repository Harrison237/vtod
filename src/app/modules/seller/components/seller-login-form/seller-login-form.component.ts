import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Token } from '@core/models/token.interface';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlTree } from '@angular/router';
import { changeViewError, getSellerInfo } from '@core/functions/sellerLogin/errors.function';
import { Seller } from '@core/models/seller.interface';
import { User } from '@core/models/user.class';
import { registerLogInId } from '@core/functions/sellerHomePage/history.function';

@Component({
  selector: 'seller-login-form',
  templateUrl: './seller-login-form.component.html',
  styleUrls: ['./seller-login-form.component.css']
})
export class SellerLoginFormComponent implements OnInit, AfterViewInit {

  routeError: string = '';
  urlTree: UrlTree = new UrlTree();

  mainForm = new FormGroup({
    userNameControl: new FormControl('', [Validators.minLength(8),Validators.maxLength(30), Validators.required]),
    passwordControl: new FormControl('', [Validators.minLength(5), Validators.maxLength(10), Validators.required])
  });

  @ViewChild('username') userInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  @ViewChild('btnInput') btnInput!: ElementRef;
  @ViewChild('pErrorPassword') errorPassword!: ElementRef;
  @ViewChild('pErrorUser') errorUser!: ElementRef;
  @ViewChild('errorField') httpError!: ElementRef;

  constructor(private router: Router, 
    private http:HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.urlTree = this.router.parseUrl(this.router.url);

    if(this.urlTree.queryParams['error'] !== undefined) {
      this.routeError = this.urlTree.queryParams['error'];
    }
  }

  ngAfterViewInit(): void {
    let viewArray: Array<ElementRef> = new Array;

    if(this.routeError !== '') {
      if(this.routeError === 'Not-token-found') {
        this.httpError.nativeElement.innerHTML = 'Inicie sesión primero';
        this.httpError.nativeElement.classList.remove('disabled');
      }
    }

    viewArray.push(this.userInput);
    viewArray.push(this.passwordInput);
    viewArray.push(this.btnInput);
    viewArray.push(this.errorPassword);
    viewArray.push(this.errorUser);

    changeViewError(this.mainForm, viewArray);
  }

  focusFunction(type:string): void {
    if(type === 'user') {
      this.userInput.nativeElement.parentNode.parentNode.classList.add('focus');
    } else {
      this.passwordInput.nativeElement.parentNode.parentNode.classList.add('focus');
    }
  }

  blurFunction(type:string): void {
    if(type === 'user') {
      if (this.userInput.nativeElement.value === '') {
        this.userInput.nativeElement.parentNode.parentNode.classList.remove('focus');
      }
    } else {
      if (this.passwordInput.nativeElement.value === '') {
        this.passwordInput.nativeElement.parentNode.parentNode.classList.remove('focus');
      }
    }
  }

  async requestHomePage() {
    const result: {message: string, seller: Seller} = getSellerInfo(this.userInput, this.passwordInput);

    if (result.message === 'Validate the inputs data') {
      console.log(result.message);
    } else {
      this.btnInput.nativeElement.classList.add('btn-disabled');
      this.httpError.nativeElement.classList.add('disabled');

      this.http.post<Token>('http://localhost:8000/api/auth/login', result.seller)
      .subscribe((res) => {
        this.btnInput.nativeElement.classList.remove('btn-disabled');
        let token = res.access_token;

        let userHeaders = new HttpHeaders();
        userHeaders = userHeaders.append('Authorization', `Bearer ${token}`);

        this.http.get<{user: User, seller: boolean, administrator: boolean}>
        ('http://localhost:8000/api/auth/me', {headers: userHeaders})
        .subscribe((user) => {
          let currentUser = user.user;
          let seller = user.seller;
          let administrator = user.administrator;

          if (administrator) {
            this.httpError.nativeElement.innerHTML = 'El usuario ingresado no es un vendedor';
            this.httpError.nativeElement.classList.remove('disabled');
          } else if (seller) {
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(currentUser));

            let userId: number = currentUser.id;

            registerLogInId(userId);

            this.router.navigateByUrl('/seller/HomePage');
          }
        },(userError: HttpErrorResponse) =>{
          console.log(userError);
        });
      }, (err: HttpErrorResponse) => {
        this.btnInput.nativeElement.classList.remove('btn-disabled');

        if (err.error.message === 'User not found'){
          this.httpError.nativeElement.innerHTML = 'Usuario no encontrado';
          this.httpError.nativeElement.classList.remove('disabled');
        } else {
          this.httpError.nativeElement.innerHTML = 'El usuario y la contraseña no coinciden';
          this.httpError.nativeElement.classList.remove('disabled');
        }
      }); 
    }
  }

  buttonsRedirect() {
    this.router.navigateByUrl('/seller/Products');
  }
}
