import {CanActivateFn} from "@angular/router";
import {authenticationGuard} from "./authentication.guard";
import {TestBed} from "@angular/core/testing";

describe('authenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authenticationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
