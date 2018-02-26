import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  conversations = [];

  constructor(public dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _studentService: StudentService) { }

  ngOnInit() {
    this.loadConversationsByStudentId(this.data.id);
  }

  loadConversationsByStudentId(studentId: number) {
    this._studentService.findAllConversationsByStudentId(studentId).subscribe(response => {
      this.conversations = response;
    });
  }
}
