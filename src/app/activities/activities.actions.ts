import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Activity } from './models/Activity';

export enum ActivitiesActionTypes {
    AddActivity = '[Request] [Activities] Add Activity',
    EditActivity = '[Request] [Activities] Edit Activity',
    DeleteActivity = '[Request] [Activities] Delete Activity',
    AddActivitySuccess = '[API] [Activities] Add Activities Success',
    AddActivityError = '[API] [Activities] Add Activities Error',
    DeleteActivitySuccess = '[API] [Activities] Delete Activity Success',
    DeleteActivitiesError = '[API] [Activities] Delete Activity Error',
    EditActivitySuccess = '[API] [Activities] Edit Activity Success',
    EditActivitiesError = '[API] [Activities] Edit Activity Error',
}

export class AddActivity implements Action {
    readonly type = ActivitiesActionTypes.AddActivity;
    constructor(public activity: Activity, public programId: number) { }
}

export class DeleteActivity implements Action {
    readonly type = ActivitiesActionTypes.DeleteActivity;
    constructor(public activityId: number) { }
}

export class EditActivity implements Action {
    readonly type = ActivitiesActionTypes.EditActivity;
    constructor(public activityId: number, public activity: Activity) { }
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

export class AddActivityError implements Action {
    readonly type = ActivitiesActionTypes.AddActivityError;
    constructor(public payload: HttpErrorResponse) { }
}
export class EditActivityError implements Action {
    readonly type = ActivitiesActionTypes.EditActivitiesError;
    constructor(public payload: HttpErrorResponse) { }
}
export class DeleteActivityError implements Action {
    readonly type = ActivitiesActionTypes.DeleteActivitiesError;
    constructor(public payload: HttpErrorResponse) { }
}


export type ActivitiesActions = AddActivity | DeleteActivity | AddActivitySuccess | DeleteActivitySuccess
    | EditActivitySuccess | AddActivityError | EditActivityError | DeleteActivityError;

