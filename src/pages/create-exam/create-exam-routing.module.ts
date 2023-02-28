import { ExitGuard } from './../../core/guards/exit.guards';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam.component';

const routes: Routes = [{
  path: '',
  component: CreateExamComponent,
  canDeactivate: [ExitGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateExamRoutingModule { }
