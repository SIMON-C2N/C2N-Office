import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatDialogConfig
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ConversationsComponent } from './students/conversations/conversations.component';
import { PaymentsComponent } from './students/payments/payments.component';
import { EnquiryComponent } from './students/dialogues/enquiry/enquiry.component';
import { StudentUpdateComponent } from './students/dialogues/student-update/student-update.component';
import { BatchComponent } from './students/dialogues/batch/batch.component';
import { ConversationComponent } from './students/dialogues/conversation/conversation.component';
import { ViewComponent } from './students/conversations/dialouges/view/view.component';


import { StudentService } from "./students/services/student.service";

const routes: Routes = [{ path: '', component: StudentsComponent },
{ path: 'students', component: StudentsComponent },
{ path: 'students/conversations', component: ConversationsComponent },
{ path: 'students/payment', component: PaymentsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ConversationsComponent,
    PaymentsComponent,
    EnquiryComponent,
    StudentUpdateComponent,
    BatchComponent,
    ConversationComponent,
    ViewComponent
  ],
  entryComponents: [EnquiryComponent, StudentUpdateComponent, BatchComponent, ConversationComponent,ViewComponent],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }