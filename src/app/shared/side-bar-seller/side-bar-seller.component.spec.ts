import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSellerComponent } from './side-bar-seller.component';

describe('SideBarSellerComponent', () => {
  let component: SideBarSellerComponent;
  let fixture: ComponentFixture<SideBarSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
