import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSellerComponent } from './home-page-seller.component';

describe('HomePageSellerComponent', () => {
  let component: HomePageSellerComponent;
  let fixture: ComponentFixture<HomePageSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
