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
import { tenBasedOnPageNumber } from '../core/services/utility';

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
    createSelector(selectAllActivities, activities => activities.filter(activity => activity.programId === programId));


export const selectUIState = createFeatureSelector<fromUi.State>('ui');
export const selectProgramsPageNumber: MemoizedSelector<object, number> = createSelector(selectUIState, state => state.programsPageNumber);
export const selectActivitiesPageNumber =
    (programId): MemoizedSelector<object, number> => createSelector(selectUIState, state => state.activitiesPageNumber[programId] || 1);

export const selectTenPrograms: MemoizedSelector<object, Program[]> = createSelector(selectAllPrograms, selectProgramsPageNumber,
    (arr, pageNumber) => tenBasedOnPageNumber(pageNumber, arr));

export const selectProgramsCount: MemoizedSelector<object, number> = createSelector(selectAllPrograms, arr => arr.length);
export const selectActivitiesCountForAProgram = (programId): MemoizedSelector<object, number> =>
    createSelector(selectActivitiesForAProgram(programId), arr => arr.length);


export const selectTenActivities = (programId): MemoizedSelector<object, Activity[]> => createSelector(
    selectActivitiesForAProgram(programId),
    selectActivitiesPageNumber(programId),
    (arr, pageNumber) => tenBasedOnPageNumber(pageNumber, arr));


export const doesProgramHaveActivities = (programId: number): MemoizedSelector<object, boolean> =>
    createSelector(selectActivitiesForAProgram(programId), arr => arr.length ? true : false);
