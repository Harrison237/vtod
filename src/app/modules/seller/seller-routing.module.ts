import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateLoginGuard } from '@core/guards/validate-login.guard';
import { HomePageSellerComponent } from './components/Page/home-page-seller/home-page-seller.component';
import { SellerLoginPageComponent } from './components/seller-login-page/seller-login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SellerLoginPageComponent
  },
  {
    path: 'HomePage',
    canActivate: [ValidateLoginGuard],
    component: HomePageSellerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
