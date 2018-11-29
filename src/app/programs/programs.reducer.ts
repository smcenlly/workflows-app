import { ProgramsActions, ProgramsActionTypes } from './programs.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Program } from './models/program';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
export interface State extends EntityState<Program> { }

export const programAdapter: EntityAdapter<Program> = createEntityAdapter<Program>();

export const initialState: State = programAdapter.getInitialState();

export function reducer(state = initialState, action: ProgramsActions): State {
    switch (action.type) {

        case ProgramsActionTypes.FetchProgramsSuccess:
            programAdapter.removeAll(state);
            return programAdapter.addMany(action.payload, state);

        case ProgramsActionTypes.FetchProgramsError:
        case ProgramsActionTypes.ChangePage:
            return {
                ...state,
            };

        default:
            return state;
    }
}
