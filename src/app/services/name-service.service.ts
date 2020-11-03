import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class NameService {
  name = 'Joshua Og';
  getMyName() {
    return this.name;
  }
  setMyName(name: string) {
    this.name = name;
  }
  setNameAsync(name: string) {
    return of(name).pipe(
      delay(100),
      tap((value) => {
        this.name = value;
      })
    )
  }
  getNameAsync() {
    return of(this.name).pipe(delay(100))
  }
  getNameAsync2() {
    return Promise.resolve(this.name);
  }
  constructor() { }
}
