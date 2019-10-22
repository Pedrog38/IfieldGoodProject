import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaterielService {
 

  private apiUrl = 'http://localhost:3000/materiel';
  public listMateriel;

  constructor(private http :HttpClient) { }

  postMateriel(data) {
    return this.http.post(this.apiUrl,data).toPromise();
  }
  getMateriel() {
    return this.http.get(this.apiUrl).toPromise();
  }
}
