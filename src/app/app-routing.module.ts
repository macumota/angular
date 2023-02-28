import { CreateExamModule } from './../pages/create-exam/create-exam.module';
import { AuthGuard } from './../core/guards/auth.guard';
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
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'account',
    loadChildren: () => import('../pages/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-exam',
    loadChildren: () => import('../pages/create-exam/create-exam.module').then(m => m.CreateExamModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about-us',
    loadChildren: () => import('../pages/about-us/about-us.module').then(m => m.AboutUsModule)
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
