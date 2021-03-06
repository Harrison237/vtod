import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SideBarHomePageService } from '@shared/services/side-bar-home-page.service';
import { elementsSiderBar } from './sideBarElements.seller';
import { environment } from '@environments/environment';
import { nullToString } from '@core/functions/sellerLogin/errors.function';
import { setHeaders } from '@shared/functions/headers.function';
import { userSeller } from '@core/models/uSeller.class';
import { Shop } from '@core/models/shop.class';
import { Branch } from '@core/models/branch.class';
import { User } from '@core/models/user.class';
import { setHeadersAxios, setHeadersFetch } from '@core/functions/http/headers.function';
import axios from 'axios';
import { registerLogOut } from '@core/functions/sellerHomePage/history.function';
import { Router } from '@angular/router';
import { getNumberReference } from '@core/functions/sellerHomePage/sideBarFuncs.function';

@Component({
  selector: 'app-side-bar-seller',
  templateUrl: './side-bar-seller.component.html',
  styleUrls: ['./side-bar-seller.component.css']
})
export class SideBarSellerComponent implements OnInit, AfterViewInit {

  protected sellerInfo: userSeller = new userSeller();
  protected shopInfo: Shop = new Shop();
  protected branchInfo: Branch = new Branch();
  private uri: string = environment.baseUrl;
  private token: string = nullToString(sessionStorage.getItem('token'));
  private sideBarButtons: Array<HTMLElement> = [];

  listSideBar = elementsSiderBar;

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('btnLogOut') btnLogOut!: ElementRef;

  constructor(private classService: SideBarHomePageService,
    private http: HttpClient,
    private router: Router,
    private ref: ElementRef
  ) {}
  
  ngOnInit() {
    let userInfo = new User();
    let userSession: string = nullToString(sessionStorage.getItem('user'));
    let headers = setHeaders(this.token);
    
    // headers = headers.append('user-type', 'seller');
    
    userInfo = JSON.parse(userSession);
    
    this.http.get<Array<userSeller>>(this.uri+'seller/info/'+userInfo.id, { headers: headers }).subscribe(async (res) => {
      this.sellerInfo = res[0];
      let headersFetch: HeadersInit = setHeadersFetch(this.token);
      
      try {
        const shopBranchData: [Response, Response] = await Promise.all([
          fetch(this.uri + 'branch/shop/' + this.sellerInfo.id, { 'method': 'GET', 'headers': headersFetch }),
          fetch(this.uri + 'branch/' + this.sellerInfo.id, { 'method': 'GET', 'headers': headersFetch })
        ]);

        const rawShop: { shop: Shop } = await shopBranchData[0].json();
        const rawBranch: { branch: Branch } = await shopBranchData[1].json();
        this.shopInfo = rawShop.shop;
        this.branchInfo = rawBranch.branch;
        
        this.classService.sideBarClass.emit({
          message: 'all data',
          user: userInfo,
          seller: this.sellerInfo,
          shop: this.shopInfo,
          branch: this.branchInfo
        });

        this.btnLogOut.nativeElement.removeAttribute('disabled');
      } catch (e) {
        console.log(e);
      }
    }, (err: HttpErrorResponse) => {

    });
  }
  
  ngAfterViewInit(): void {
    for (let data of this.listSideBar) {
      this.sideBarButtons.push(this.ref.nativeElement.querySelector('#'+data.buttonID));
    }
  }

  btnFunction(): void {
    if (this.sidebar.nativeElement.classList.contains('unactive')) {
      this.sidebar.nativeElement.classList.replace('unactive', 'active');
      this.classService.sideBarClass.emit({ message: 'active' });
    } else {
      this.sidebar.nativeElement.classList.replace('active', 'unactive');
      this.classService.sideBarClass.emit({ message: 'unactive' });
    }
  }

  async logOut(): Promise<void> {
    let axiosHeaders = setHeadersAxios(this.token);

    registerLogOut();
    
    await axios.get(this.uri+'auth/logout', {
      headers: axiosHeaders
    });

    sessionStorage.clear();
    this.router.navigateByUrl('/seller/login');
  }

  buttonsRedirect() {
    this.router.navigateByUrl('/seller/Products');
  }
}