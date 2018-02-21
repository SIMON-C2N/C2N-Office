import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class StudentService {

  constructor(private http:HttpClient) {}
 
    findAllByReferrers(): Observable<any> {
        return this.http.get(environment.url+"students");
    }
}