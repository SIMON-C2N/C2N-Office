import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { EnquiryComponent } from './dialogues/enquiry/enquiry.component';
import { BatchComponent } from "./dialogues/batch/batch.component";
import { ConversationComponent } from "./dialogues/conversation/conversation.component";
import { StudentUpdateComponent } from "./dialogues/student-update/student-update.component";

import { StudentService } from "./services/student.service";
import { EmployeesService } from '../employees/services/employees.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  student_columns = ["id", "firstName", "lastName", "mobileNo", "emailId", "doj", "isLead", "referrerName", "add_batch", "add_conversation", "view"];
  dataSource = new MatTableDataSource<Student>([]);;

  constructor(public dialog: MatDialog, public _studentService: StudentService, public _employeeService: EmployeesService) { }

  ngOnInit() {
    this.findAllStudentsWithReferrer();
  }

  findAllStudentsWithReferrer() {
    this._studentService.findAllByReferrers()
      .subscribe(
        response => {
          if (response != undefined && response.length != 0) {
            this.dataSource = new MatTableDataSource<Student>(response);
          }
        });

  }

  findAllEmployees() {
    this._employeeService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  getColumnName(columnKey: string): string {
    let columnName: string = "";
    switch (columnKey) {
      case "id":
        columnName = "#";
        break;
      case "firstName":
        columnName = "First name";
        break;
      case "lastName":
        columnName = "Last name";
        break;
      case "mobileNo":
        columnName = "Mobile no";
        break;
      case "emailId":
        columnName = "Email Id";
        break;
      case "doj":
        columnName = "DOJ";
        break;
      case "isLead":
        columnName = "Is Lead ?";
        break;
      case "referredBy":
        columnName = "Referred By";
        break;
      case "referrerName":
        columnName = "Referred By";
        break;
      case "add_batch":
        columnName = "Add batch";
        break;
      case "add_conversation":
        columnName = "Add Conversation";
        break;
      case "view":
        columnName = "Student view";
        break;
    }
    return columnName;
  }

  openEnquiryForm() {
    let dialogRef = this.dialog.open(EnquiryComponent, {
      width: '30%',
    });
  }

  addBatch(row) {
    let dialogRef = this.dialog.open(BatchComponent, {
      width: '30%',
      data: row
    });
  }

  addConversation(row) {
    let dialogRef = this.dialog.open(ConversationComponent, {
      width: '30%',
      data: row
    });
  }

  updateStudent(row) {
    let dialogRef = this.dialog.open(StudentUpdateComponent, {
      data: row
    });
  }
}

export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  emailId: string,
  mobileNo: number,
  doj: string,
  isLead: string,
  referredBy: string
}

const STUDENT_ELEMENT_DATA: Student[] = [
  { id: 1, firstName: 'Gopiraj', lastName: 'Kummari', emailId: 'g@gmail.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'Y' },
  { id: 2, firstName: 'Ramu', lastName: 'Karroti', emailId: 'k@rediff.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 3, firstName: 'Srikanth', lastName: 'A', emailId: 's@salesforce.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 4, firstName: 'Mohan', lastName: 'B', emailId: 'm@c2n.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 5, firstName: 'Mani', lastName: 'N', emailId: 'mani@c2n.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'Y' },
  { id: 6, firstName: 'Siva', lastName: 'K', emailId: 'siva@c2n.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'Y' },
  { id: 7, firstName: 'Jagdish', lastName: 'B', emailId: 'j@cts.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'Y' },
  { id: 8, firstName: 'Prabhakar', lastName: 'Aluvala', emailId: 'p@gmail.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123454, isLead: 'Y' },
  { id: 9, firstName: 'Stephen', lastName: 'Aluvala', emailId: 'stephen@ts.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123454, isLead: 'Y' },
  { id: 10, firstName: 'Simon', lastName: 'Aluvala', emailId: 'simon@birlasoft.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'N' },
  { id: 11, firstName: 'Sridhar', lastName: 'K', emailId: 'sridhar@yahoo.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'N' },
  { id: 12, firstName: 'Madan', lastName: 'Mohan', emailId: 'madan@cloudbees.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 13, firstName: 'Manoj', lastName: 'D', emailId: 'manoj@helpdesk.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123455, isLead: 'N' },
  { id: 14, firstName: 'Dinesh', lastName: 'Dommeti', emailId: 'dinesh@dommeti.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123455, isLead: 'N' },
  { id: 15, firstName: 'Debashish', lastName: 'Behuria', emailId: 'deb@behuria.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123458, isLead: 'Y' },
  { id: 16, firstName: 'Manjunath', lastName: 'Baireddy', emailId: 'manju@baireddy.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'Y' },
  { id: 17, firstName: 'Manikandan', lastName: 'Venkatraman', emailId: 'manik@venkatraman.tn', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 18, firstName: 'Krishna', lastName: 'Medida', emailId: 'krishna@medida.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 19, firstName: 'Sarvesh', lastName: 'Babu', emailId: 'sarvesh@babu.south', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123453, isLead: 'Y' },
  { id: 20, firstName: 'Niaz', lastName: 'Ahmed', emailId: 'niaz@ahmed.org', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
];