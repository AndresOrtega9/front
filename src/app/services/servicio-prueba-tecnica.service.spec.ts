import { TestBed } from '@angular/core/testing';

import { ServicioPruebaTecnicaService } from './servicio-prueba-tecnica.service';

describe('ServicioPruebaTecnicaService', () => {
  let service: ServicioPruebaTecnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPruebaTecnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
