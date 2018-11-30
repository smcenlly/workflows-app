import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    MetaReducer,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPrograms from '../programs/programs.reducer';
import * as fromActivities from '../activities/activities.reducer';
import * as fromUi from '../ui/ui.reducer';
import { Program } from '../programs/models/program';
import { Activity } from '../activities/models/Activity';

export interface State {

    programs: fromPrograms.State;

    activities: fromActivities.State;

    ui: fromUi.State;




}

export const reducers: ActionReducerMap<State> = {

    programs: fromPrograms.reducer,

    activities: fromActivities.reducer,

    ui: fromUi.reducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const selectProgramsState = createFeatureSelector<fromPrograms.State>('programs');
export const { selectAll: selectAllPrograms } = fromPrograms.programAdapter.getSelectors(selectProgramsState);
export const selectActivitiesState = createFeatureSelector<fromActivities.State>('activities');
export const { selectAll: selectAllActivities } = fromActivities.activityAdapter.getSelectors(selectActivitiesState);
export const selectActivitiesForAProgram = (programId) =>
    createSelector(selectAllActivities, activities => activities.filter(activity => activity.programId == programId));

export const selectUIState = createFeatureSelector<fromUi.State>('ui');
export const selectProgramsPageNumber: MemoizedSelector<object, number> = createSelector(selectUIState, state => state.programsPageNumber);
export const selectActivitiesPageNumber =
    (programId): MemoizedSelector<object, number> => createSelector(selectUIState, state => state.activitiesPageNumber[programId]);

export const selectTenPrograms: MemoizedSelector<object, Program[]> = createSelector(selectAllPrograms, selectProgramsPageNumber,
    (arr, pageNumber) => {
        const firstIndex = (pageNumber - 1) * 10;
        return arr.slice(firstIndex, firstIndex + 10);
    });

// export const selectTenPrograms = reducers.programs(fromPrograms.initialState)


export const selectTenActivities = (programId): MemoizedSelector<object, Activity[]> => createSelector(
    selectActivitiesForAProgram(programId),
    selectActivitiesPageNumber(programId),
    (arr, pageNumber) => arr.slice(1, pageNumber));

// export const selectActivitiesForAProgram
// export const getIsLoading = createSelector(getProgramsState, state => state.isLoading);
// export const getCurrentPage = createSelector(getProgramsState, state => state.page);
// export const getCurrentPageForActivitiesInProgram = (programId) => createSelector(getProgramsState, state => state.page);

// export const getActivitiesState = createFeatureSelector<fromActivities.State>('activities');



// const state = {
//     data: [
//         { name: 'a', activities: { data: [], page: 5 } }
//     ],
//     page: 4,
//     isLoading: true
// };

// export const getActivitiesForProgram = (programId) => createSelector(getPrograms, programs =>
//     programs.find(program => program.id === programId).activities);
