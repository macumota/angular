import { ApiExamsService } from 'src/core/services/callApi/exams/api-exams.service';
import { Router } from '@angular/router';
import { IExam } from 'src/core/models/IExam';
import { ExamComponent } from './exam/exam.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.scss']
})
export class ListExamsComponent implements OnInit {

  examList : IExam[] = []
  public examSubject : string = "";
  public examYear : number = 0;

  constructor (private router : Router, public ApiExamsService : ApiExamsService){}

  ngOnInit() {
    this.ApiExamsService.getApiExams().subscribe((data: IExam[]) => {
      const results: IExam[] = data;

      const formattedResults = results.map(({ id, year, announcement, subject, exam }) => ({
        id,
        year,
        announcement,
        subject,
        exam
      }));
      this.examList = formattedResults;
    })
  }
}
