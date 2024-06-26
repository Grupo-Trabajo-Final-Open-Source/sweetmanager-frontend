import {SignInRequest} from "./sign-in.request";

import { TestBed } from '@angular/core/testing';

describe('SignInRequest', () => {
  let service: SignInRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
