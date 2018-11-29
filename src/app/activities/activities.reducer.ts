import { ActivitiesActions, ActivitiesActionTypes } from './activities.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Activity } from './models/activity';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
export interface State extends EntityState<Activity> { }

export const activityAdapter: EntityAdapter<Activity> = createEntityAdapter<Activity>();

export const initialState: State = activityAdapter.getInitialState();

export function reducer(state = initialState, action: ActivitiesActions): State {
    switch (action.type) {
        case ActivitiesActionTypes.FetchActivitiesSuccess:
            activityAdapter.removeAll(state);
            return activityAdapter.addMany(action.payload, state);

        case ActivitiesActionTypes.ChangePage:
            return {
                ...state,
            };

        default:
            return state;
    }
}
