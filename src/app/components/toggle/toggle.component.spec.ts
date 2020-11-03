import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ ToggleComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {

  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  beforeEach(() => {
    component = new ToggleComponent();
  })
  it('should be off at first', () => {
    expect(component.isOnline).toBeFalsy()
  })
  it('should be on when we click on the button', () => {
    expect(component.isOnline).toBeFalsy()
    component.toggle();
    expect(component.isOnline).toBeTruthy()
  })
  it('should display `Welcome Back` if the user is logged in', () => {
    component.toggle();
    expect(component.message).toMatch(/welcome back/i);
  })
  it('should display a `Please Log in ` if the user is not logged in', () => {
    expect(component.message).toMatch(/please log in/i);
  })
});
