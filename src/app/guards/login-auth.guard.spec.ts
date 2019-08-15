import { TestBed, async, inject } from '@angular/core/testing';

import { LoginAuth } from './login-auth.guard';

describe('LoginAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuth]
    });
  });

  it('should ...', inject([LoginAuth], (guard: LoginAuth) => {
    expect(guard).toBeTruthy();
  }));
});
