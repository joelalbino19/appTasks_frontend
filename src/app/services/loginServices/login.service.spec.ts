import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { LoginService } from "./login.service"
import { of } from "rxjs";

describe('Get service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let loginService: LoginService;
  const dummyData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' }
  ];
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    loginService = new LoginService(httpClientSpy);
  })

  describe('getUsersApi()', () => {
    it('Should return the expected JSON when the getMethod method is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(dummyData));
      loginService.getUsersApi().subscribe({
        next: (value) => {
          expect(value).withContext('expected heroes').toEqual(dummyData);
          done();
        },
        error: done.fail,
      });
      expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    });
  })


})