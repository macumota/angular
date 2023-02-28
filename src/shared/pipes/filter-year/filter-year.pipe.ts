import { IExam } from './../../../core/models/IExam';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterYear'
})
export class FilterYearPipe implements PipeTransform {

  transform(value: IExam[], input: number): 
  IExam[] {
     if (!input) { return value; }
    return value.filter((exam) => {
      return exam.year === input
        && (exam.year === input || !input);
    })
}

}
