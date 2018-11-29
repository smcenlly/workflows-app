import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Program } from 'src/app/programs/models/program';
import { Activity } from 'src/app/activities/models/Activity';
import { apiBaseUrl } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly firstLevelUrl = `${apiBaseUrl}/workflowlevel1/`;
  private readonly secondLevelUrl = `${apiBaseUrl}/workflowlevel2/`;
  constructor(private http: HttpClient) { }

  getPrograms(): Observable<Program[]> {
    console.log('in api service');
    return this.http.get<Program[]>(this.firstLevelUrl);
  }

  getActivitiesForProgram(programId): Observable<Activity[]> {
    console.log('in api service');
    return this.http.get<Activity[]>(`${this.secondLevelUrl}/?workflowlevel1__id=${programId}`);
  }
}

