import { TestBed } from "@angular/core/testing";

import { MeteoriteService } from "./services/meteorite.service";

describe("MeteoriteService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MeteoriteService = TestBed.get(MeteoriteService);
    expect(service).toBeTruthy();
  });
});
