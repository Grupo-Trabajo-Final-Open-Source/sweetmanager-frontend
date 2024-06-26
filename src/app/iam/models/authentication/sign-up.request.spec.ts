import {TestBed} from "@angular/core/testing";

import {SignUpRequest} from "./sign-up.request";

describe('SignUpRequest', () => {
  let service: SignUpRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
