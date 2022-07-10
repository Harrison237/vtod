import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarSellerComponent } from './side-bar-seller/side-bar-seller.component';



@NgModule({
  declarations: [
    SideBarSellerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarSellerComponent
  ]
})
export class SharedModule { }
