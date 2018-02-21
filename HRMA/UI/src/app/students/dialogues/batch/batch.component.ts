import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

}
