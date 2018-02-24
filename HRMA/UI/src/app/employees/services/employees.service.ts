import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class EmployeesService {

  constructor(private http:HttpClient) {}
 
    findAll(): Observable<any> {
        return this.http.get(environment.url+"employees");
    }
}