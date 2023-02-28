import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExamsRoutingModule } from './list-exams-routing.module';
import { ListExamsComponent } from './list-exams.component';
import { ExamComponent } from './exam/exam.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [ListExamsComponent, ExamComponent],
  imports: [CommonModule, ListExamsRoutingModule, FormsModule, SharedModule],
})
export class ListExamsModule {}
