import { ActivitiesActions, ActivitiesActionTypes } from './activities.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Activity } from './models/activity';

export interface State {
    isLoading: boolean;
    error: HttpErrorResponse | null;
    data: Activity[] | null;
    page: number;
    selectedProgramId: string | null;
}

export const initialState: State = {
    isLoading: false,
    error: null,
    data: [],
    page: 1,
    selectedProgramId: null
};

export function reducer(state = initialState, action: ActivitiesActions): State {
    switch (action.type) {
        case ActivitiesActionTypes.FetchActivities:
            return {
                ...state,
                isLoading: true,
                error: null,
                selectedProgramId: action.selectedProgramId
            };

        case ActivitiesActionTypes.FetchActivitiesSuccess:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };

        case ActivitiesActionTypes.FetchActivitiesError:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                selectedProgramId: null
            };

        default:
            return state;
    }
}
