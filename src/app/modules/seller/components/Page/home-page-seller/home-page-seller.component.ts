import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { placeChart } from '@core/functions/sellerHomePage/chart.function';
import { Branch } from '@core/models/branch.class';
import { Shop } from '@core/models/shop.class';
import { userSeller } from '@core/models/uSeller.class';
import { User } from '@core/models/user.class';
import { SideBarHomePageService } from '@shared/services/side-bar-home-page.service';

@Component({
  selector: 'app-home-page-seller',
  templateUrl: './home-page-seller.component.html',
  styleUrls: ['./home-page-seller.component.css']
})
export class HomePageSellerComponent implements OnInit, AfterViewInit {

  protected currentUser: User = new User();
  protected currentSeller: userSeller = new userSeller();
  protected currentShop: Shop = new Shop();
  protected currentBranch: Branch = new Branch();
  protected btnArray!: Array<HTMLElement>;

  constructor(private classService: SideBarHomePageService, private el: ElementRef) { }

  @ViewChild('homeContent') homeContent!: ElementRef;
  @ViewChild('chart') chart!: ElementRef;

  ngOnInit(): void {
    this.classService.sideBarClass.subscribe((res: {
      message: string,
      user: User,
      seller: userSeller,
      shop: Shop,
      branch: Branch
    }) => {
  
      if (res.message === 'active') {
        this.homeContent.nativeElement.classList.replace('active', 'unactive');

        for (const button of this.btnArray) {
          button.setAttribute('disabled', '');
        }
      } else if (res.message === 'unactive') {
        this.homeContent.nativeElement.classList.replace('unactive', 'active');

        for (const button of this.btnArray) {
          button.removeAttribute('disabled');
        }
      } else {
        if (res.message === 'all data') {
          this.currentUser = res.user;
          this.currentSeller = res.seller;
          this.currentShop = res.shop;
          this.currentBranch = res.branch;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.btnArray = this.el.nativeElement.getElementsByClassName('seller-btn');

    placeChart(this.chart);
  }
}
