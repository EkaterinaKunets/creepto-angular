import { Injectable } from '@angular/core';
import { CreeptooInterface } from './creeptoo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class apiResponse {
  constructor(private http: HttpClient) {}

  returnAnswer(cipher: string, key: number, inputText: string, action: string): Observable<CreeptooInterface> {
    return this.http.get<any>(`http://crpt.formyown.xyz/api/v2/${cipher}?action=${action}&key=${key}&text=${inputText}`);
  }
}
