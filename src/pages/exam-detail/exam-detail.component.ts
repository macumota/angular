import { ApiSubjectsService } from 'src/core/services/callApi/subjects/api-subjects.service';
import { ApiExamsService } from 'src/core/services/callApi/exams/api-exams.service';
import { switchMap, of, Observable, forkJoin } from 'rxjs';
import { IExam } from './../../core/models/IExam';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent {

  public exam : Observable<IExam>

  constructor(public route : ActivatedRoute, public ApiExamsService : ApiExamsService, public ApiSubjectsService : ApiSubjectsService){
    this.exam = this.route.paramMap.pipe(
      switchMap((value : ParamMap) => this.ApiExamsService.getApiExamDetail(value.get("id")!))
    ) 
  }
}
 