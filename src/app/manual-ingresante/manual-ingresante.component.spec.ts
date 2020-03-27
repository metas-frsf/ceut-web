import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManualIngresanteComponent } from "./manual-ingresante.component";

describe("ManualIngresanteComponent", () => {
  let component: ManualIngresanteComponent;
  let fixture: ComponentFixture<ManualIngresanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManualIngresanteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIngresanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
