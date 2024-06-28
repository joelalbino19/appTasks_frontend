import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpService } from "./http.service"
import { of } from "rxjs";

describe('Get service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let httpService: HttpService;
  const dummyData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' }
  ];
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    httpService = new HttpService(httpClientSpy);
  })

  describe('getUsersApi()', () => {
    it('Should return the expected JSON when the getMethod method is called.', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(dummyData));
      httpService.getUsersApi().subscribe({
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