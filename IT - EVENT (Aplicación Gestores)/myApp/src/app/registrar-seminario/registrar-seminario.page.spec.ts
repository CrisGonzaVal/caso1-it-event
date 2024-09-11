import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarSeminarioPage } from './registrar-seminario.page';

describe('RegistrarSeminarioPage', () => {
  let component: RegistrarSeminarioPage;
  let fixture: ComponentFixture<RegistrarSeminarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSeminarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
