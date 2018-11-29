import { ProgramsActions, ProgramsActionTypes, Pagination } from './programs.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Program } from './models/program';

export interface State {
    isLoading: boolean;
    error: HttpErrorResponse | null;
    data: Program[] | null;
    next: string | null;
    previous: string | null;
    page: number;
}

export const initialState: State = {
    isLoading: false,
    error: null,
    data: [],
    next: null,
    previous: null,
    page: 1
};

export function reducer(state = initialState, action: ProgramsActions): State {
    switch (action.type) {
        case ProgramsActionTypes.FetchPrograms:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ProgramsActionTypes.FetchProgramsSuccess:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };

        case ProgramsActionTypes.FetchProgramsError:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}
