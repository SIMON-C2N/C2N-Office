import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ViewComponent } from './dialouges/view/view.component';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  student_columns = ["id", "firstname", "lastname", "mobileNo", "emailId", "doj", "isLead", "referredBy"];
  dataSource = new MatTableDataSource(STUDENT_ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

getColumnName(columnKey: string): string {
    let columnName: string = "";
    switch (columnKey) {
      case "id":
        columnName = "#";
        break;
      case "firstname":
        columnName = "First name";
        break;
      case "lastname":
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
    }
    return columnName;
}

openConversations(row){
let dialogRef = this.dialog.open(ViewComponent, {
      data: row
    });
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

const STUDENT_ELEMENT_DATA: Student[] = [
  { id: 1, firstname: 'Gopiraj', lastname: 'Kummari', emailId: 'g@gmail.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'Y' },
  { id: 2, firstname: 'Ramu', lastname: 'Karroti', emailId: 'k@rediff.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 3, firstname: 'Srikanth', lastname: 'A', emailId: 's@salesforce.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 4, firstname: 'Mohan', lastname: 'B', emailId: 'm@c2n.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 5, firstname: 'Mani', lastname: 'N', emailId: 'mani@c2n.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'Y' },
  { id: 6, firstname: 'Siva', lastname: 'K', emailId: 'siva@c2n.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'Y' },
  { id: 7, firstname: 'Jagdish', lastname: 'B', emailId: 'j@cts.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'Y' },
  { id: 8, firstname: 'Prabhakar', lastname: 'Aluvala', emailId: 'p@gmail.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123454, isLead: 'Y' },
  { id: 9, firstname: 'Stephen', lastname: 'Aluvala', emailId: 'stephen@ts.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123454, isLead: 'Y' },
  { id: 10, firstname: 'Simon', lastname: 'Aluvala', emailId: 'simon@birlasoft.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'N' },
  { id: 11, firstname: 'Sridhar', lastname: 'K', emailId: 'sridhar@yahoo.in', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123457, isLead: 'N' },
  { id: 12, firstname: 'Madan', lastname: 'Mohan', emailId: 'madan@cloudbees.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 13, firstname: 'Manoj', lastname: 'D', emailId: 'manoj@helpdesk.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123455, isLead: 'N' },
  { id: 14, firstname: 'Dinesh', lastname: 'Dommeti', emailId: 'dinesh@dommeti.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123455, isLead: 'N' },
  { id: 15, firstname: 'Debashish', lastname: 'Behuria', emailId: 'deb@behuria.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123458, isLead: 'Y' },
  { id: 16, firstname: 'Manjunath', lastname: 'Baireddy', emailId: 'manju@baireddy.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'Y' },
  { id: 17, firstname: 'Manikandan', lastname: 'Venkatraman', emailId: 'manik@venkatraman.tn', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 18, firstname: 'Krishna', lastname: 'Medida', emailId: 'krishna@medida.com', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
  { id: 19, firstname: 'Sarvesh', lastname: 'Babu', emailId: 'sarvesh@babu.south', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 98480123453, isLead: 'Y' },
  { id: 20, firstname: 'Niaz', lastname: 'Ahmed', emailId: 'niaz@ahmed.org', doj: '26-01-2018', referredBy: 'Ramu K', mobileNo: 9848012345, isLead: 'N' },
];