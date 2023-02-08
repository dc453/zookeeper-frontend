import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HunterService {

  constructor(private http: HttpClient) { }

  getHunters() {
    return this.http.get('/assets/hunters.json');
  }
}
