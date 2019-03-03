import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services/api.service';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { of } from 'rxjs';
import { SharedState, SharedStateModel } from 'src/app/store/shared/shared.state';
import { Program } from 'src/app/programs/models/program';
import { FetchData } from 'src/app/store/shared/shared.actions';

export interface ProgramStateModel {
    items: Program[];
}

@State<ProgramStateModel>({
    name: 'program',
    defaults: {
        items: [],
    },
})
export class ProgramState {
    constructor(private api: ApiService, private sb: SnackBarService) {}

    @Selector()
    public static getState(state: ProgramStateModel) {
        return state;
    }

    @Selector([SharedState])
    static selectTenPrograms(state: ProgramStateModel, sharedState: SharedStateModel) {
        const firstIndex = (sharedState.programsPageNumber - 1) * 10;
        return state.items.slice(firstIndex, firstIndex + 10);
    }

    @Selector()
    static selectProgramsCount(state: ProgramStateModel) {
        return state.items.length;
    }

    @Selector()
    static selectProgramName(state: ProgramStateModel) {
        return (programId: number) => {
            const program = state.items.find((program: Program) => program.id === programId);
            return program ? program.name : '';
        };
    }

    @Action(FetchData)
    fetchData(ctx: StateContext<ProgramStateModel>) {
        return this.api.getPrograms().pipe(
            tap((programs: Program[]) => {
                const state = ctx.getState();
                ctx.patchState({
                    items: programs,
                });
            }),
            catchError(err => {
                this.sb.emitErrorSnackBar();
                return of([]);
            }),
        );
    }
}



