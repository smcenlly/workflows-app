import { Action } from '@ngrx/store';

export enum UiActionTypes {
  ChangeProgramPage = '[UI] [Programs] Change page',
  ChangeActivitiesPage = '[UI] [Activities] Change page',
}

export class ChangeProgramPage implements Action {
  readonly type = UiActionTypes.ChangeProgramPage;
  constructor(public payload: number) { }
}

export class ChangeActivitiesPage implements Action {
  readonly type = UiActionTypes.ChangeActivitiesPage;
  constructor(public payload: {programId: string, pageNumber: number}) { }
}

export type UiActions = ChangeProgramPage | ChangeActivitiesPage;
