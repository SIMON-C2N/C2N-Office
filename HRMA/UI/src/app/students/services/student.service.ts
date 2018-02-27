import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) { }

    findAllByReferrers(value: any): Observable<any> {
        return this.http.get(environment.url + "students" + "?size=" + value.pageSize + "&page=" + value.pageIndex);
    }

    addNewEnquiry(newEnquiry: any): Observable<any> {
        return this.http.post(environment.url + 'students', newEnquiry, {});
    }

    findAllUpcomingBatches(studentId): Observable<any> {
        return this.http.get(environment.url + "courses/upcoming?studentId=" + studentId);
    }

    addBatchToStudent(newBatch: any): Observable<any> {
        return this.http.put(environment.url + 'students/add_batch', newBatch, {});
    }

    addConversation(newConversation: any): Observable<any> {
        return this.http.put(environment.url + 'students/update_conversation', newConversation, {});
    }

    findAllBatchesByStudentId(studentId: number): Observable<any> {
        return this.http.get(environment.url + "students/findAllBatches/" + studentId);
    }

    findAllConversationsByStudentId(studentId: number): Observable<any> {
        return this.http.get(environment.url + "students/findAllConversations/" + studentId);
    }

    searchAllByKeyword(keyword: string): Observable<any> {
        return this.http.get(environment.url + "students/searchAll/" + keyword);
    }
}