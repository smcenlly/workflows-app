import { State, Action, StateContext, Selector } from '@ngxs/store';

import { ChangeProgramPage, ChangeActivitiesPage } from './shared.actions';

export interface SharedStateModel {
    programsPageNumber: number;
    activitiesPageNumber: { [s: string]: number };
}

@State<SharedStateModel>({
    name: 'shared',
    defaults: {
        programsPageNumber: 1,
        activitiesPageNumber: {},
    },
})
export class SharedState {
    @Selector()
    public static getState(state: SharedStateModel) {
        return state;
    }

    @Selector()
    static selectAtivitiesPageNumber(state: SharedStateModel) {
        return (programId: number) => {
            return state.activitiesPageNumber[programId] || 1;
        };
    }

    @Action(ChangeProgramPage)
    changeProgramPage(ctx: StateContext<SharedStateModel>, action: ChangeProgramPage) {
        ctx.patchState({
            programsPageNumber: action.pageNumber,
        });
    }

    @Action(ChangeActivitiesPage)
    changeActivitiesPage(ctx: StateContext<SharedStateModel>, action: ChangeActivitiesPage) {
        const state = ctx.getState();
        ctx.patchState({
            activitiesPageNumber: {
                ...state.activitiesPageNumber,
                [action.programId]: action.pageNumber,
            },
        });
    }
}
