import { Injectable } from '@angular/core';
import { AppInterface } from './app.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterReposService {
  constructor(private http: HttpClient) {}
  returnCode(chiper: string, key: string, inputText: string, action: string): Observable<AppInterface> {
    return this.http.get<any>(`http://crpt.formyown.xyz/api/v1/${chiper}?key=${key}&text=${inputText}&action=${action}`)
  }
}
