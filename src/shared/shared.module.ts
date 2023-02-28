import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterYearPipe } from './pipes/filter-year/filter-year.pipe';
import { FilterSubjectPipe } from './pipes/filter-subject/filter-subject.pipe';

@NgModule({
  declarations: [
    FilterYearPipe,
    FilterSubjectPipe],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule],
  exports: [
    FilterSubjectPipe,
    FilterYearPipe
  ],
})
export class SharedModule {}
