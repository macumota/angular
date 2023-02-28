import { IExam } from './../../../models/IExam';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_EXAM_URL = "https://63ee9086d466e0c18bb1f88c.mockapi.io/exams"

@Injectable({
  providedIn: 'root'
})

export class ApiExamsService {

  constructor(public http: HttpClient) {}

  public getApiExams(): Observable<IExam[]> {
    return this.http.get<IExam[]>(`${API_EXAM_URL}/exams`);
  }

  public getApiExamDetail(id: string): Observable<IExam> {
    return this.http.get<IExam>(`${API_EXAM_URL}/exams/${id}`);
  }

  public deleteApiExam(id: string): Observable<IExam> {
    return this.http.delete<IExam>(`${API_EXAM_URL}/exams/${id}`);
  }

  public createApiExam(body: IExam): Observable<IExam> {
    return this.http.post<IExam>(`${API_EXAM_URL}/exams`, body);
  }

  public editApiExam(id: string, body: IExam): Observable<IExam> {
    return this.http.put<IExam>(`${API_EXAM_URL}/exams/${id}`, body);
  }
}

