import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadronComponent } from './padron.component';

describe('PadronComponent', () => {
  let component: PadronComponent;
  let fixture: ComponentFixture<PadronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadronComponent]
    });
    fixture = TestBed.createComponent(PadronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
