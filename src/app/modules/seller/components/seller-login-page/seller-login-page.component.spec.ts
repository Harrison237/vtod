import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLoginPageComponent } from './seller-login-page.component';

describe('SellerLoginPageComponent', () => {
  let component: SellerLoginPageComponent;
  let fixture: ComponentFixture<SellerLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
