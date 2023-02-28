import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamDetailRoutingModule } from './exam-detail-routing.module';
import { ExamDetailComponent } from './exam-detail.component';


@NgModule({
  declarations: [
    ExamDetailComponent
  ],
  imports: [
    CommonModule,
    ExamDetailRoutingModule
  ]
})
export class ExamDetailModule { }
