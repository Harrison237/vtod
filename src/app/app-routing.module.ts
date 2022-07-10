import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seller',
    pathMatch: 'full'
  },
  {
    path: 'seller',
    redirectTo: 'seller',
    pathMatch: 'full'
  },
  {
    path: 'seller',
    loadChildren: () => import('@modules/seller/seller.module').then((m) => m.SellerModule)
  },
  {
    path: 'seller/HomePage',
    loadChildren: () => import('@modules/seller/seller.module').then((m) => m.SellerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
