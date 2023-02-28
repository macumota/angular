import { ISubject } from './../../core/models/ISubject';
import { ApiSubjectsService } from 'src/core/services/callApi/subjects/api-subjects.service';
import { ApiExamsService } from 'src/core/services/callApi/exams/api-exams.service';
import { switchMap, of, Observable, forkJoin, map } from 'rxjs';
import { IExam } from './../../core/models/IExam';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent {

  public exam? : IExam;
  public subject?: ISubject[];


  constructor(
    private activatedroute : ActivatedRoute,
    private ApiExamsService : ApiExamsService, public ApiSubjectsService : ApiSubjectsService
    ){}

  ngOnInit() : void {
    this.activatedroute.params.subscribe((params) => {
      const subject = params["id"];
      forkJoin({
        exam: this.ApiExamsService.getApiExamDetail(subject),
        subject: this.ApiSubjectsService.getApiSubjects()
      }).pipe(
        map((result)=>{
          const exam = result.exam;
          const subject = result.subject.filter((subject) => subject.name === exam.subject);
          return {exam, subject}
        })
      ).subscribe((data)=> {
        this.exam = data.exam;
        this.subject = data.subject;
      })
    })
  }
}
 