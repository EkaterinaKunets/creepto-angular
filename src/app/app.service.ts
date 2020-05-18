import { Injectable } from '@angular/core';
import { AppInterface } from './app.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class getResponse {
  constructor(private http: HttpClient) {}

  returnAnswer(cipher: string, key: number, inputText: string, action: string): Observable<AppInterface> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<any>(`http://crpt.formyown.xyz/api/v1/${cipher}?key=${key}&text=${inputText}&action=${action}`,
      { headers }).pipe(
        tap(x => { console.log(x + 'lokek')})
    )
  }
}
