// import { environment } from '../../environments/environment';
// import * as fromPrograms from '../programs/programs.reducer';
// import * as fromActivities from '../activities/activities.reducer';
// import * as fromUi from '../ui/ui.reducer';
// import { Program } from '../programs/models/program';
// import { Activity } from '../activities/models/Activity';
// import { tenBasedOnPageNumber } from '../core/services/utility';

// export interface State {

//     programs: fromPrograms.State;

//     activities: fromActivities.State;

//     ui: fromUi.State;

// }

// export const selectProgramState = createFeatureSelector<fromPrograms.State>('programs');
// export const { selectAll: selectAllPrograms } = fromPrograms.programAdapter.getSelectors(selectProgramState);
// export const selectActivityState = createFeatureSelector<fromActivities.State>('activities');
// export const { selectAll: selectAllActivities } = fromActivities.activityAdapter.getSelectors(selectActivityState);
// export const selectActivitiesForAProgram = (programId) =>
//     createSelector(selectAllActivities, activities => activities.filter(activity => activity.programId === programId));

// export const selectUIState = createFeatureSelector<fromUi.State>('ui');
// export const selectProgramsPageNumber: MemoizedSelector<object, number> = createSelector(selectUIState, state => state.programsPageNumber);
// export const selectActivitiesPageNumber =
//     (programId): MemoizedSelector<object, number> => createSelector(selectUIState, state => state.activitiesPageNumber[programId] || 1);

// export const selectTenPrograms: MemoizedSelector<object, Program[]> = createSelector(selectAllPrograms, selectProgramsPageNumber,
//     (arr, pageNumber) => tenBasedOnPageNumber(pageNumber, arr));

// export const selectProgramsCount: MemoizedSelector<object, number> = createSelector(selectAllPrograms, arr => arr.length);
// export const selectActivitiesCountForAProgram = (programId): MemoizedSelector<object, number> =>
//     createSelector(selectActivitiesForAProgram(programId), arr => arr.length);

// export const selectTenActivities = (programId): MemoizedSelector<object, Activity[]> => createSelector(
//     selectActivitiesForAProgram(programId),
//     selectActivitiesPageNumber(programId),
//     (arr, pageNumber) => tenBasedOnPageNumber(pageNumber, arr));

// export const doesProgramHaveActivities = (programId: number): MemoizedSelector<object, boolean> =>
//     createSelector(selectActivitiesForAProgram(programId), arr => arr.length ? true : false);

// const getName = (arr, id) => {
//     const theOne = arr.find(item => item.id === id);
//     if (theOne) {
//         return theOne.name;
//     }
// };

// export const selectProgramName = (id: number): MemoizedSelector<object, string> =>
//     createSelector(selectAllPrograms, arr => getName(arr, id));

// export const selectActivityName = (id: number): MemoizedSelector<object, string> =>
//     createSelector(selectAllActivities, arr => getName(arr, id));

// export const selectActivityByActivityId = (id: number): MemoizedSelector<object, Activity> =>
//     createSelector(selectAllActivities, arr => arr.find(item => item.id === id));
