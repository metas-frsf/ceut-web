import { TestBed } from "@angular/core/testing";

import { DeportesService } from "./deportes.service";

describe("DeportesService", () => {
  let service: DeportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeportesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
