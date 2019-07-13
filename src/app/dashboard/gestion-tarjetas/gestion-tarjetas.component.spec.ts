import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTarjetasComponent } from './gestion-tarjetas.component';

describe('GestionTarjetasComponent', () => {
  let component: GestionTarjetasComponent;
  let fixture: ComponentFixture<GestionTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
