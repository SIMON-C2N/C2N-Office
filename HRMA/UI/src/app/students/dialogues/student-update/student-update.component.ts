import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  course_columns = ["id", "course_name", "course_duration", "course_starting_date", "timings", "no_of_days", "no_of_absences", "finalizedFee", "paidAmount"];

  dataSource = new MatTableDataSource();

  constructor(public dialogRef: MatDialogRef<StudentUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.dialogRef.disableClose = true;
  }

  getColumnName(columnKey: string): string {
    let columnName: string = "";
    switch (columnKey) {
      case "id":
        columnName = "#";
        break;
      case "course_name":
        columnName = "Course name";
        break;
      case "course_duration":
        columnName = "Course duration";
        break;
      case "course_starting_date":
        columnName = "Course starting date";
        break;
      case "timings":
        columnName = "Timings";
        break;
      case "no_of_days":
        columnName = "No. of days";
        break;
      case "no_of_absences":
        columnName = "No. of absences";
        break;
      case "finalizedFee":
        columnName = "Finalized fee";
        break;
      case "paidAmount":
        columnName = "Paid amount";
        break;
    }
    return columnName;
  }

  ngOnInit() {
  }

}
