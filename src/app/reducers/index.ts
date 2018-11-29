import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPrograms from '../programs/programs.reducer';
import * as fromActivities from '../activities/activities.reducer';

export interface State {

    programs: fromPrograms.State;

    activities: fromActivities.State;



}

export const reducers: ActionReducerMap<State> = {

    programs: fromPrograms.reducer,

    activities: fromActivities.reducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getProgramsState = createFeatureSelector<fromPrograms.State>('programs');
export const getPrograms = createSelector(getProgramsState, state => state.data);
export const getIsLoading = createSelector(getProgramsState, state => state.isLoading);
export const getCurrentPage = createSelector(getProgramsState, state => state.page);
export const getIsFirstPage = createSelector(getProgramsState, state => !state.previous);
export const getIsLastPage = createSelector(getProgramsState, state => !state.next);

export const getActivitiesState = createFeatureSelector<fromActivities.State>('activities');
export const getActivities = createSelector(getActivitiesState, state => state.data);


