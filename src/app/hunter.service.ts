import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hunter } from './hunter';

@Injectable({
  providedIn: 'root'
})
export class HunterService {

  constructor(private http: HttpClient) { }

  getHunters(): Observable<Hunter[]> {
    return this.http.get<Hunter[]>('/assets/hunters.json');
  }

  getHunter(hunter: string): Observable<Hunter> {
    return of({name: 'foo', id: 'foo'})
  }
}
