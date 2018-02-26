import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ViewComponent } from './dialouges/view/view.component';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  searchKeyword;
  student_columns = ["id", "firstName", "lastName", "mobileNo", "emailId", "doj", "isLead", "referrerName"];
  dataSource = new MatTableDataSource([]);

  //Pagination
  // pageSizeOptions=[50, 100, 250, 100];
  pageSize=50;
  length=1;

  constructor(public dialog: MatDialog, public _studentService: StudentService) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this._studentService.findAllByReferrers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
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
      case "referrerName":
        columnName = "Referred By";
        break;
    }
    return columnName;
  }

  openConversations(row) {
    let dialogRef = this.dialog.open(ViewComponent, {
      data: row
    });
  }

  searchAll() {
    if (this.searchKeyword != undefined && this.searchKeyword.length > 3) {
      this._studentService.searchAllByKeyword(this.searchKeyword)
        .subscribe(
          response => {
            if (response != undefined && response.length != 0) {
              this.dataSource = new MatTableDataSource<Student>(response);
            }
          });
    } else if (this.searchKeyword != undefined && this.searchKeyword.length == 0) {
      this.loadStudents();
    }
  }
}

export interface Student {
  id: number,
  firstname: string,
  lastname: string,
  emailId: string,
  mobileNo: number,
  doj: string,
  isLead: string,
  referredBy: string
}