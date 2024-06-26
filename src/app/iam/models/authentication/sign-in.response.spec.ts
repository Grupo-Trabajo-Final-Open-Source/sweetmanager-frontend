import { SignInResponse } from './sign-in.response';

import { TestBed } from '@angular/core/testing';

describe('SignInResponse', () => {
  let service: SignInResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInResponse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
