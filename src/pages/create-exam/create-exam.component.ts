import { IExam } from './../../core/models/IExam';
import { map, switchMap, of } from 'rxjs';
import { ApiExamsService } from './../../core/services/callApi/exams/api-exams.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/core/services/message/message.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit{

  public examForm?: FormGroup;
  public urlImg: string = '';
  public canEdit: boolean = false;
  public examId?: string;
  public isExamCreated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private examService: ApiExamsService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if (!id) {
          return of(undefined);
        } else {
          this.examId = id;
          return this.examService.getApiExamDetail(id);
        }
      }),
    ).subscribe((exam?: IExam) => {
      this.canEdit = !!exam;
      this.createNewForm(exam);
    });
  }

  public ngOnInit() {
    this.examForm?.get('image')?.valueChanges.subscribe((value) => {
      if (!value) { return; }
      this.urlImg = value;
      this.messageService.setMessage(value);
    });

    this.examForm?.get('image')?.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }

  public createNewForm(exam?: IExam) {
    this.examForm = this.fb.group({
      year: new FormControl(exam?.year || '', [Validators.required]),
      announcement: new FormControl(exam?.announcement ||'', [Validators.required]),
      subject: new FormControl(exam?.subject ||'', [Validators.required]),
      exam: new FormControl(exam?.exam ||''),//!imagen del examen
    });
  }

  public createNewExam() {
    if (!this.examForm?.valid) { return; }
    const examRequest = this.canEdit && this.examId
      ? this.examService.editApiExam(this.examId, this.examForm?.value)
      : this.examService.createApiExam(this.examForm?.value);
    examRequest.subscribe(() => {
      console.log(this.examForm)
      this.examForm?.reset();
      this.router.navigate(['exam-list']);
    });
  }

}