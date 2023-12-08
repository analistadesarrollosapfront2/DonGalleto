import { TestBed } from '@angular/core/testing';

import { ControlProductosService } from './control-productos.service';

describe('ControlProductosService', () => {
  let service: ControlProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
