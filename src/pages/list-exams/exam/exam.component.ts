import { ApiExamsService } from 'src/core/services/callApi/exams/api-exams.service';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { IExam } from 'src/core/models/IExam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent{

  constructor (private router : Router, public ApiExamsService : ApiExamsService){}

  @Input() exam : IExam | null = null

  public navigateToDetail (id:number) {
  
    this.router.navigate(["/exam", id])
    }
  }
