import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealServiceService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<{ name: string }[]> {
    return this.httpClient.get<{ name: string }[]>('http://localhost:3000');
  }
}
