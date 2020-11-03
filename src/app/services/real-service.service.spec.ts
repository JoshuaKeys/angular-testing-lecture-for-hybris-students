import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RealServiceService } from './real-service.service';

describe('RealServiceService', () => {
  let service: RealServiceService
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RealServiceService,
      { provide: HttpClient, useValue: httpClientSpy }
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(RealServiceService);
  })

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
  it('should fetch real data from the server', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of([
      {
        "name": "Joshua"
      },
      {
        "name": "Serhii"
      },
      {
        "name": "Roman"
      }
    ]))
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(3)
      done();
    })
  });
});
