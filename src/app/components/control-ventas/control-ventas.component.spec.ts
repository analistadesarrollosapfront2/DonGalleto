import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVentasComponent } from './control-ventas.component';

describe('ControlVentasComponent', () => {
  let component: ControlVentasComponent;
  let fixture: ComponentFixture<ControlVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlVentasComponent]
    });
    fixture = TestBed.createComponent(ControlVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
