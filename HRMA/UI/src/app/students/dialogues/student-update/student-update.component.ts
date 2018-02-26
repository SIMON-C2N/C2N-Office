import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  course_columns = ["id", "courseName", "duration", "startDate", "timings", "noOfAbsences", "finalizedFee", "paidAmount", "isCompleted"];

  dataSource = new MatTableDataSource([]);

  constructor(public dialogRef: MatDialogRef<StudentUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _studentService: StudentService) {
    // this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.findAllBatchesOfStudent(this.data.id);
  }

  getColumnName(columnKey: string): string {
    let columnName: string = "";
    switch (columnKey) {
      case "id":
        columnName = "#";
        break;
      case "courseName":
        columnName = "Course name";
        break;
      case "duration":
        columnName = "Course duration";
        break;
      case "startDate":
        columnName = "Course starting date";
        break;
      case "timings":
        columnName = "Timings";
        break;
      case "noOfAbsences":
        columnName = "No. of absences";
        break;
      case "finalizedFee":
        columnName = "Finalized fee";
        break;
      case "paidAmount":
        columnName = "Paid amount";
        break;
      case "isCompleted":
        columnName = "is Completed ?";
        break;
    }
    return columnName;
  }


  findAllBatchesOfStudent(studentId: number) {
    this._studentService.findAllBatchesByStudentId(studentId).subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

}

export interface StudentBatches {
  id: number,
  studentId: number,
  courseName: string,
  duration: number,
  startDate: string,
  timings: string,
  noOfAbsences: number,
  finalizedFee: number,
  paidAmount: number;
  isCompleted: number
}