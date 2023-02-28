import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateExamRoutingModule } from './create-exam-routing.module';
import { CreateExamComponent } from './create-exam.component';


@NgModule({
  declarations: [
    CreateExamComponent
  ],
  imports: [
    CommonModule,
    CreateExamRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateExamModule { }
