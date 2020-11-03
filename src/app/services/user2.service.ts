import { Injectable } from '@angular/core';
import { NameService } from './name-service.service';

@Injectable({
  providedIn: 'root'
})
export class User2Service {
  userName: string;
  constructor(private nameService: NameService) { }
  getUserName() {
    return this.nameService.getNameAsync()
  }
}
