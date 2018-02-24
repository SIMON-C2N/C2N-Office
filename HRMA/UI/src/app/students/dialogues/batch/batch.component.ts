import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batches = [];

  batchForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<BatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _studentService: StudentService) {
    // this.dialogRef.disableClose = true;
  }

  ngOnInit() {

    this.batchForm = new FormGroup({
      studentId: new FormControl('', []),
      batchId: new FormControl('', [Validators.required]),
      finalizedFee: new FormControl('', [Validators.required]),
      paidAmount: new FormControl('', [Validators.required])
    });

    this.findAllUpcoming(this.data.id);
  }

  findAllUpcoming(studentId) {
    this._studentService.findAllUpcomingBatches(studentId).subscribe(response => {
      this.batches = response;
    });
  }

  assignBatchToStudent() {
    this.batchForm.value.studentId = this.data.id;
    this._studentService.addBatchToStudent(this.batchForm.value).subscribe(response => { });
  }

}
