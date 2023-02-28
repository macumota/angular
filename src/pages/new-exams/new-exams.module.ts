import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NewExamsRoutingModule } from './new-exams-routing.module';
import { NewExamsComponent } from './new-exams.component';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewExamComponent } from './new-exam/new-exam.component';



@NgModule({
  declarations: [NewExamsComponent, NewExamComponent],
  imports: [
    CommonModule, NewExamsRoutingModule, FormsModule, SharedModule
  ]
})
export class NewExamsModule {}
