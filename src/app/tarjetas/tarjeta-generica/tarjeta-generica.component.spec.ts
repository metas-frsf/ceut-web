import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaGenericaComponent } from './tarjeta-generica.component';

describe('TarjetaGenericaComponent', () => {
  let component: TarjetaGenericaComponent;
  let fixture: ComponentFixture<TarjetaGenericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaGenericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
