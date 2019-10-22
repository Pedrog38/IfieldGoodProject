import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GaecService {

  private apiUrl = 'http://localhost:3000/gaec';

  constructor(private http :HttpClient) { }

  getGaecList() {
    return this.http.get(this.apiUrl).toPromise();
  }
}
