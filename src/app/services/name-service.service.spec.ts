import { TestBed } from '@angular/core/testing';

import { NameService } from './name-service.service';

describe('NameService', () => {
  // beforeEach(() => TestBed.configureTestingModule({}));

  // it('should be created', () => {
  //   const service: NameServiceService = TestBed.get(NameServiceService);
  //   expect(service).toBeTruthy();
  // });
  let nameService: NameService
  beforeEach(() => {
    nameService = new NameService();
  })
  it('should return the name of the user', () => {
    expect(nameService.name).toBe('Joshua Og')
  })
  it('should be able to get name by the getMyName()', () => {
    expect(nameService.getMyName()).toBe(nameService.name)
  })
  it('should be able to set user name using setMyName()', () => {
    nameService.setMyName('Serhii');
    expect(nameService.name).toBe('Serhii')
  })
  it('should get name from fake server', (done: DoneFn) => {
    nameService.getNameAsync().subscribe(name => {
      expect(nameService.name).toBe('Joshua Og')
      done();
    })
  })
  it('should set the user name asynchronously', (done: DoneFn) => {
    nameService.setNameAsync('Serhii').subscribe(() => {
      expect(nameService.name).toEqual('Serhii')
      done();
    })
  })
  it('should also return a name from fake server (using promises)', (done: DoneFn) => {
    nameService.getNameAsync2().then(name => {
      expect(nameService.name).toBe('Joshua Og');
      done();
    })
  })
});
