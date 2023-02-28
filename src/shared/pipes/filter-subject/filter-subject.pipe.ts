import { IExam } from './../../../core/models/IExam';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSubject'
})
export class FilterSubjectPipe implements PipeTransform {

  transform(value: IExam[], input: string = ''): 
  IExam[] {
    if (!input) { return value; }
    input = input.toLowerCase()
    return value.filter((exam) => {
      return exam.subject.toLowerCase().includes(input)
        && (exam.subject.toLowerCase().includes(input) || !input);
    })
}}
