import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarActividadPage } from './registrar-actividad.page';

describe('RegistrarActividadPage', () => {
  let component: RegistrarActividadPage;
  let fixture: ComponentFixture<RegistrarActividadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
