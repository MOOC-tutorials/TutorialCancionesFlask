/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioService } from './usuario.service';

describe('Service: Usuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService]
    });
  });

  it('should ...', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
