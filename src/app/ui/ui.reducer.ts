import { UiActionTypes, ChangeProgramPage, UiActions } from './ui.actions';
import { Action } from '@ngrx/store';

export interface State {
    programsPageNumber: number;
    activitiesPageNumber: { [s: string]: number; };
}

export const initialState: State = {
    programsPageNumber: 1,
    activitiesPageNumber: {}
};

export function reducer(state = initialState, action: UiActions): State {
    switch (action.type) {
        case UiActionTypes.ChangeProgramPage:
            return {
                ...state,
                programsPageNumber: action.payload
            };
        case UiActionTypes.ChangeActivitiesPage:
            return {
                ...state,
                activitiesPageNumber : {...state.activitiesPageNumber, [action.payload.programId]: action.payload.pageNumber}
            };
        default:
            return state;
    }
}
