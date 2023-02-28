import { ApiExamsService } from 'src/core/services/callApi/exams/api-exams.service';
import { Router } from '@angular/router';
import { IExam } from 'src/core/models/IExam';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-exams',
  templateUrl: './new-exams.component.html',
  styleUrls: ['./new-exams.component.scss']
})
export class NewExamsComponent implements OnInit{

  public newExams : IExam[] = [];
  public examSubject : string = "";
  public examYear : number = 0;

  constructor (private router : Router, public ApiExamsService : ApiExamsService){}

  ngOnInit() {
    this.ApiExamsService.getCreatedExam().subscribe((data: IExam[]) => {
      const results: IExam[] = data;

      const formattedResults = results.map(({ id, year, announcement, subject, exam }) => ({
        id,
        year,
        announcement,
        subject,
        exam
      }));
      this.newExams = formattedResults;
    })
  }
}
