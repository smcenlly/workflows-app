import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Program } from './programs/models/program';
import { Activity } from './activities/models/Activity';

export enum AppActionTypes {
  FetchData = '[API] Fetch Data',
  FetchDataSuccess = '[API] Fetch Data Success',
}

export class FetchData implements Action {
  readonly type = AppActionTypes.FetchData;
}

export class FetchDataSuccess implements Action {
  readonly type = AppActionTypes.FetchDataSuccess;

  constructor(public payload: {programs: Program[], activities: Activity[]}) { }
}

export type AppActions = FetchData | FetchDataSuccess;
