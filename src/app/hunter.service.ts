import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

import { Hunter } from './hunter';

@Injectable({
  providedIn: 'root'
})
export class HunterService {

  hunters: Hunter[] | null = null;

  constructor(private http: HttpClient) { }

  getHunters(): Observable<Hunter[]> {
    if (this.hunters !== null) {
      return of(this.hunters);
    }
    return this.http.get<Hunter[]>('/assets/hunters.json')
      .pipe(
        tap((data) => {
          this.hunters = data
        })
      );
  }

  getHunter(hunter: string): Observable<Hunter> {
    return this.getHunters()
      .pipe(
        map(result => result.filter(curHunter => curHunter.id === hunter)[0])
      );
  }
}
