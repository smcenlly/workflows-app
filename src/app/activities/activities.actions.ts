import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Activity } from './models/Activity';

export enum ActivitiesActionTypes {
    FetchActivities = '[Request] [Activities] Fetch Activities',
    AddActivity = '[Request] [Activities] Add Activity',
    EditActivity = '[Request] [Activities] Edit Activity',
    DeleteActivity = '[Request] [Activities] Delete Activity',
    FetchActivitiesSuccess = '[API] [Activities] Load Activities Success',
    FetchActivitiesError = '[API] [Activities] Load Activities Error',
    AddActivitySuccess = '[API] [Activities] Add Activities Success',
    AddActivityError = '[API] [Activities] Add Activities Error',
    DeleteActivitySuccess = '[API] [Activities] Delete Activity Success',
    DeleteActivitiesError = '[API] [Activities] Delete Activity Error',
    EditActivitySuccess = '[API] [Activities] Edit Activity Success',
    EditActivitiesError = '[API] [Activities] Edit Activity Error',
}

export class FetchActivities implements Action {
    readonly type = ActivitiesActionTypes.FetchActivities;
}

export class AddActivity implements Action {
    readonly type = ActivitiesActionTypes.FetchActivitiesSuccess;
    constructor(public activity: Activity, public programId: number) { }
}

export class DeleteActivity implements Action {
    readonly type = ActivitiesActionTypes.FetchActivitiesSuccess;
    constructor(public activityId: number) { }
}

export class EditActivity implements Action {
    readonly type = ActivitiesActionTypes.FetchActivitiesSuccess;
    constructor(public activityId: number, public activity: Activity) { }
}

export class FetchActivitiesSuccess implements Action {
    readonly type = ActivitiesActionTypes.FetchActivitiesSuccess;
    constructor(public payload: Activity[]) { }
}

export class AddActivitySuccess implements Action {
    readonly type = ActivitiesActionTypes.AddActivitySuccess;
    constructor(public activity: Activity) { }
}

export class EditActivitySuccess implements Action {
    readonly type = ActivitiesActionTypes.EditActivitySuccess;
    constructor(public activity: Activity) { }
}
export class DeleteActivitySuccess implements Action {
    readonly type = ActivitiesActionTypes.DeleteActivitySuccess;
    constructor(public activityId: number) { }
}
export class FetchActivitiesError implements Action {
    readonly type = ActivitiesActionTypes.FetchActivitiesError;
    constructor(public payload: HttpErrorResponse) { }
}

export type ActivitiesActions = FetchActivities | FetchActivitiesSuccess | FetchActivitiesError | AddActivity |
    DeleteActivity | FetchActivitiesSuccess | FetchActivitiesError |
    AddActivitySuccess | DeleteActivitySuccess | EditActivitySuccess;

