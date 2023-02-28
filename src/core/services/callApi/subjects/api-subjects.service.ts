import { ISubject } from './../../../models/ISubject';
import { IExam } from './../../../models/IExam';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_EXAM_URL = "https://63ee9086d466e0c18bb1f88c.mockapi.io/exams"

@Injectable({
  providedIn: 'root'
})

export class ApiSubjectsService {

  constructor(public http: HttpClient) {}

  public getApiSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(`${API_EXAM_URL}/subjects`);
  }
}

