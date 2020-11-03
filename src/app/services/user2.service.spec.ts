import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NameService } from './name-service.service';
import { UserService } from './user.service';

import { User2Service } from './user2.service';

describe('User2Service', () => {
  let nameService = jasmine.createSpyObj('NameService', ['getNameAsync'])

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      User2Service,
      {
        provide: NameService,
        useValue: nameService
      }
    ]
  }));

  it('should be created', () => {
    const service: User2Service = TestBed.get(User2Service);
    expect(service).toBeTruthy();
  });
  it('should get the name using a spy', (done: DoneFn) => {
    const returnValue = `Joshua's TestBed Spy`
    nameService.getNameAsync.and.returnValue(of(returnValue));
    const service: User2Service = TestBed.get(User2Service);

    service.getUserName().subscribe(value => {
      expect(value).toBe(returnValue)
      done();
    })
  })
});
