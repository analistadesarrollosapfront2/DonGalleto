import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlProductosComponent } from './control-productos.component';

describe('ControlProductosComponent', () => {
  let component: ControlProductosComponent;
  let fixture: ComponentFixture<ControlProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlProductosComponent]
    });
    fixture = TestBed.createComponent(ControlProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
