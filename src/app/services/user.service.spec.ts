import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NameService } from './name-service.service';

import { UserService } from './user.service';

describe('UserService', () => {
  // beforeEach(() => TestBed.configureTestingModule({}));

  // it('should be created', () => {
  //   const service: UserService = TestBed.get(UserService);
  //   expect(service).toBeTruthy();
  // });
  let userService: UserService;
  it('should fetch name asynchronously', (done: DoneFn) => {
    let nameService = new NameService();
    userService = new UserService(nameService);
    userService.getUserName().subscribe(value => {
      expect(value).toBe('Joshua Og')
      done();
    });
  })
  it('should fetch name with a fake Service', (done: DoneFn) => {
    class FakeNameService {
      getNameAsync() {
        return of('Joshua Fake');
      }
    }
    const fakeService = new FakeNameService() as any;

    userService = new UserService(fakeService);
    userService.getUserName().subscribe(value => {
      expect(value).toBe('Joshua Fake');
      done();
    })
  })
  it('should fetch name with a spy', (done: DoneFn) => {
    const nameServiceSpy = jasmine.createSpyObj('NameService', ['getNameAsync'])
    const returnValue = of('Joshua\'s Spy');

    nameServiceSpy.getNameAsync.and.returnValue(returnValue)
    userService = new UserService(nameServiceSpy);

    userService.getUserName().subscribe(value => {
      expect(value).toBe(`Joshua's Spy`)
      done();
    })
  })
});
