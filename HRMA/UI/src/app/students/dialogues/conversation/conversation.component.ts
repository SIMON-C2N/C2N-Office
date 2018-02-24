import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import * as _moment from 'moment';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  postdate;
  conversationForm:FormGroup;

  constructor(public dialogRef: MatDialogRef<ConversationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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

  updateConversation(){
    this.conversationForm.value.studentId=this.data.id;
    this.conversationForm.value.postdate=_moment.utc(this.postdate).local().format("YYYY-MM-DD");
    console.log(this.conversationForm.value);
  }
}
