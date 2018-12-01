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
    private readonly firstLevelUrl = `${apiBaseUrl}/workflowlevel1`;
    private readonly secondLevelUrl = `${apiBaseUrl}/workflowlevel2`;
    constructor(private http: HttpClient) { }

    getPrograms(): Observable<Program[]> {
        return this.http.get<Program[]>(this.firstLevelUrl);
    }

    getActivities(): Observable<Activity[]> {
        return this.http.get<Activity[]>(`${this.secondLevelUrl}`);
    }

    addActivity(activity: Activity): Observable<Activity> {
        return this.http.post<Activity>(`${this.secondLevelUrl}/`, activity);
    }

    updateActivity(activity: Activity): Observable<Activity> {
        return this.http.post<Activity>(`${this.secondLevelUrl}/${activity.id}/`, activity);
    }

    deleteActivity(activityId: number): Observable<any> {
        return this.http.delete<any>(`${this.secondLevelUrl}/${activityId}`);
    }

    getActivitiesForProgram(programId): Observable<Activity[]> {
      return this.http.get<Activity[]>(`${this.secondLevelUrl}/?workflowlevel1__id=${programId}`);
    }
}

