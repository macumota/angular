import { IExam } from './../../../core/models/IExam';
import { ApiExamsService } from './../../../core/services/callApi/exams/api-exams.service';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.scss']
})
export class NewExamComponent {
  constructor (private router : Router, public ApiExamsService : ApiExamsService){}

  @Input() exam? : IExam

  public navigateToDetail (id:number) {
  
    this.router.navigate(["/exam", id])
    }
}
