import {TestBed} from "@angular/core/testing";

import {SignUpResponse} from "./sign-up.response";

describe('SignUpResponse', () => {
  let service: SignUpResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpResponse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
