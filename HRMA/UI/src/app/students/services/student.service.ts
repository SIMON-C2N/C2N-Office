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

    addNewEnquiry(newEnquiry: any): Observable<any> {
        return this.http.post(environment.url + 'students', newEnquiry, {});
    }

    findAllUpcomingBatches(studentId): Observable<any>{
        return this.http.get(environment.url+"courses/upcoming?studentId="+studentId);
    }

    addBatchToStudent(newBatch: any): Observable<any>{
        return this.http.put(environment.url + 'students/add_batch', newBatch, {});
    }
}