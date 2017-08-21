import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosComponent } from './prestamos.component';

describe('PrestamosComponent', () => {
  let component: PrestamosComponent;
  let fixture: ComponentFixture<PrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
