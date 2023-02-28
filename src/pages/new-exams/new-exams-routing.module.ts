import { NewExamsComponent } from './new-exams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: NewExamsComponent
  }
];

@NgModule({
  imports:
  [RouterModule.forChild(routes),
  SharedModule],
  exports: [RouterModule]
})
export class NewExamsRoutingModule { }
