import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CopiesCalculatorComponent } from "./copies-calculator.component";

describe("CopiesCalculatorComponent", () => {
  let component: CopiesCalculatorComponent;
  let fixture: ComponentFixture<CopiesCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CopiesCalculatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
