import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EmployeesService } from '../../../employees/services/employees.service';
import { StudentService } from '../../services/student.service';


import * as _moment from 'moment';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit {

  _employees = [];
  enquiryForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EnquiryComponent>,public _employeeService: EmployeesService, public _studentService:StudentService) {
    // this.dialogRef.disableClose = true;
  }

  ngOnInit() {

    this.enquiryForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      emailId: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      mobileNo: new FormControl('', [
        Validators.minLength(10),
        Validators.required
      ]),
      doj: new FormControl('', [
        Validators.required
      ]),
      referredBy: new FormControl('', [
        Validators.required
      ])
    });

    this.findAllEmployees();

  }

  findAllEmployees() {
    this._employeeService.findAll().subscribe(response => {
      this._employees = response;
    });
  }

  submitEnquiry() {
    
    if (this.enquiryForm.value.doj != undefined) {
      this.enquiryForm.value.doj = _moment.utc(this.enquiryForm.value.doj).local().format("YYYY-MM-DD");
      this._studentService.addNewEnquiry(this.enquiryForm.value).subscribe(result => {});
    }

  }

}
