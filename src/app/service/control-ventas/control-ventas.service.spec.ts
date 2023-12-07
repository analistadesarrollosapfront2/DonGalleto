import { TestBed } from '@angular/core/testing';

import { ControlVentasService } from './control-ventas.service';

describe('ControlVentasService', () => {
  let service: ControlVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
