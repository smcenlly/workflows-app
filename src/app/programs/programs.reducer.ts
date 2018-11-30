import { ProgramsActions, ProgramsActionTypes } from './programs.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Program } from './models/program';
import { AppActionTypes, AppActions } from '../app.actions';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
export interface State extends EntityState<Program> { }

export const programAdapter: EntityAdapter<Program> = createEntityAdapter<Program>();

export const initialState: State = programAdapter.getInitialState();

export function reducer(state = initialState, action: ProgramsActions | AppActions): State {
    switch (action.type) {

        case AppActionTypes.FetchDataSuccess:
            programAdapter.removeAll(state);
            return programAdapter.addMany(action.payload.programs, state);

        case ProgramsActionTypes.FetchProgramsError:

        default:
            return state;
    }
}
