import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAvisosComponent } from './tarjeta-avisos.component';

describe('TarjetaAvisosComponent', () => {
  let component: TarjetaAvisosComponent;
  let fixture: ComponentFixture<TarjetaAvisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAvisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
