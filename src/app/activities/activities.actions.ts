import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Activity } from './models/Activity';

export enum ActivitiesActionTypes {
  FetchActivities = '[UI] [Activities] Fetch Activities',
  FetchActivitiesSuccess = '[API] [Activities] Load Activities Success',
  FetchActivitiesError = '[API] [Activities] Load Activities Error',
}


export class FetchActivities implements Action {
  readonly type = ActivitiesActionTypes.FetchActivities;
  constructor(public selectedProgramId: string) {}
}

export class FetchActivitiesSuccess implements Action {
  readonly type = ActivitiesActionTypes.FetchActivitiesSuccess;

  constructor(public payload: Activity[]) {}
}

export class FetchActivitiesError implements Action {
  readonly type = ActivitiesActionTypes.FetchActivitiesError;

  constructor(public payload: HttpErrorResponse) {}
}

export type ActivitiesActions = FetchActivities | FetchActivitiesSuccess | FetchActivitiesError ;
