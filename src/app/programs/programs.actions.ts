import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Program } from './models/program';
import { Activity } from '../activities/models/Activity';

export enum ProgramsActionTypes {
  FetchPrograms = '[UI] [Programs] Fetch Programs',
  FetchProgramsSuccess = '[API] [Programs] Load Programs Success',
  FetchProgramsError = '[API] [Programs] Load Programs Error',
  ChangePage = '[UI] [Programs] Change page',
}

export class FetchPrograms implements Action {
  readonly type = ProgramsActionTypes.FetchPrograms;
}

export class FetchProgramsSuccess implements Action {
  readonly type = ProgramsActionTypes.FetchProgramsSuccess;

  constructor(public payload: Program[]) { }
}

export class FetchProgramsError implements Action {
  readonly type = ProgramsActionTypes.FetchProgramsError;

  constructor(public payload: HttpErrorResponse) { }
}

export class ChangePage implements Action {
  readonly type = ProgramsActionTypes.ChangePage;

  constructor(public payload: number) { }
}



export type ProgramsActions = FetchPrograms | FetchProgramsSuccess | FetchProgramsError | ChangePage;
