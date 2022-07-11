import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerLoginFormComponent } from './components/seller-login-form/seller-login-form.component';
import { SellerLoginPageComponent } from './components/seller-login-page/seller-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageSellerComponent } from './components/Page/home-page-seller/home-page-seller.component';
import { RouterModule } from '@angular/router';
import { ValidateLoginGuard } from '@core/guards/validate-login.guard';
import { SharedModule } from '@shared/shared.module';
import { ProductMainPageComponent } from './components/Products/product-main-page/product-main-page.component';
import { ProductListComponent } from './components/Products/product-list/product-list.component';
import { SideBarSellerComponent } from '@shared/side-bar-seller/side-bar-seller.component';


@NgModule({
  declarations: [
    SellerLoginFormComponent,
    SellerLoginPageComponent,
    HomePageSellerComponent,
    ProductMainPageComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'login/:id',
        component: HomePageSellerComponent,
        canActivate: [ValidateLoginGuard]
      }
    ]),
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class SellerModule { }
