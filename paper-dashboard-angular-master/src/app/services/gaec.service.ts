import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GaecService {

  private apiUrl = 'http://localhost:3000/gaec';

  constructor(private http :HttpClient) { }

  getGaecList(): Promise<any> {
    return this.http.get(this.apiUrl).toPromise();
  }

  postGaec(data): Promise<any> {
    return this.http.post(this.apiUrl, data).toPromise();
  }
}
