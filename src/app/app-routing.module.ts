import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'list-exams',
    loadChildren: () => import('../pages/list-exams/list-exams.module').then(m => m.ListExamsModule)
  },
  {
    path: 'exam/:id',
    loadChildren: () => import('../pages/exam-detail/exam-detail.module').then(m => m.ExamDetailModule)
  },
  {
    path: 'create-exam',
    loadChildren: () => import('../pages/create-exam/create-exam.module').then(m => m.CreateExamModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('../pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'new-exams',
    loadChildren: () => import('../pages/new-exams/new-exams.module').then(m => m.NewExamsModule)
  },
  {
    path: '**',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
