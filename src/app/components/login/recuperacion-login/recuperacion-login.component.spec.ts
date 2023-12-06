import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionLoginComponent } from './recuperacion-login.component';

describe('RecuperacionLoginComponent', () => {
  let component: RecuperacionLoginComponent;
  let fixture: ComponentFixture<RecuperacionLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperacionLoginComponent]
    });
    fixture = TestBed.createComponent(RecuperacionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
