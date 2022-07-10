import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLoginFormComponent } from './seller-login-form.component';

describe('SellerLoginFormComponent', () => {
  let component: SellerLoginFormComponent;
  let fixture: ComponentFixture<SellerLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
