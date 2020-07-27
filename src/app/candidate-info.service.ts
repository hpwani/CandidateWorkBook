import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateInfoService {
  baseUrl = "/api/candidateDetails";

  constructor(private http: HttpClient) { }

  getCandidateData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addCandidate(candidateData): Observable<any> {
    return this.http.post(this.baseUrl, candidateData, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
    });
  }

}
