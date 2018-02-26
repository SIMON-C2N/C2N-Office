import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import * as _moment from 'moment';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  conversationForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ConversationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _studentService: StudentService) { }

  ngOnInit() {
    console.log(this.data);

    this.conversationForm = new FormGroup({
      studentId: new FormControl('', []),
      isEnabled: new FormControl('', []),
      postdate: new FormControl('', []),
      isLead: new FormControl('', []),
      conversation: new FormControl('', [Validators.required])
    });
  }

  updateConversation() {
    this.conversationForm.value.studentId = this.data.id;

    if(this.conversationForm.value.postdate!=undefined && this.conversationForm.value.postdate!=""){
      this.conversationForm.value.postdate = _moment.utc(this.conversationForm.value.postdate).local().format("YYYY-MM-DD");
    }

    this._studentService.addConversation(this.conversationForm.value).subscribe(response => { });
  }
}
