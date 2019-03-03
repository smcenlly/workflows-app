import { State, Action, StateContext, Selector, createSelector, Store } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services/api.service';
import { addProgramIdProp, addWorkflowLevel1Prop } from 'src/app/core/services/utility';
import { of } from 'rxjs';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { Activity } from 'src/app/activities/models/Activity';
import { SharedState, SharedStateModel } from 'src/app/store/shared/shared.state';
import { FetchData } from 'src/app/store/shared/shared.actions';
import { DeleteActivity, AddActivity, EditActivity } from './activity.actions';

export interface ActivityStateModel {
    items: Activity[];
}

@State<ActivityStateModel>({
    name: 'activity',
    defaults: {
        items: [],
    },
})
export class ActivityState {
    constructor(private api: ApiService, private sb: SnackBarService) {}

    @Selector()
    public static getState(state: ActivityStateModel): ActivityStateModel {
        return state;
    }

    @Selector()
    static selectActivityByActivityId(state: ActivityStateModel) {
        return (activityId: number) => state.items.find((activity: Activity) => activity.id === activityId);
    }

    @Selector()
    static selectProgramActivities(state: ActivityStateModel) {
        return (programId: number) => {
            return state.items.filter((activity: Activity) => activity.programId === programId);
        };
    }

    @Selector([SharedState])
    static selectTenActivities(state: ActivityStateModel, sharedState: SharedStateModel) {
        return (programId: number) => {
            const pageNumber = SharedState.selectAtivitiesPageNumber(sharedState)(programId);
            const firstIndex = (pageNumber - 1) * 10;
            return this.selectProgramActivities(state)(programId).slice(firstIndex, firstIndex + 10);
        };
    }

    @Selector()
    static selectActivitiesCount(state: ActivityStateModel) {
        return (programId: number) => this.selectProgramActivities(state)(programId).length;
    }

    @Action(FetchData)
    fetchData(ctx: StateContext<ActivityStateModel>) {
        return this.api.getActivities().pipe(
            tap((a: Activity[]) => {
                ctx.setState({
                    items: a.map(activity => addProgramIdProp(activity)),
                });
            }),
            catchError(err => {
                this.sb.emitErrorSnackBar();
                return of([]);
            }),
        );
    }

    @Action(DeleteActivity)
    deleteActivity(ctx: StateContext<ActivityStateModel>, action: DeleteActivity) {
        return this.api.deleteActivity(action.activityId).pipe(
            tap(() => {
                const state = ctx.getState();
                ctx.patchState({
                    items: state.items.filter(activity => activity.id !== action.activityId),
                });
            }),
        );
    }

    @Action(AddActivity)
    addActivity(ctx: StateContext<ActivityStateModel>, action: AddActivity) {
        return this.api.addActivity(addWorkflowLevel1Prop(action.activity, action.programId)).pipe(
            tap((activity: Activity) => {
                const state = ctx.getState();
                ctx.patchState({
                    items: [...state.items, addProgramIdProp(activity)],
                });
            }),
        );
    }

    @Action(EditActivity)
    editActivity(ctx: StateContext<ActivityStateModel>, action: EditActivity) {
        return this.api.updateActivity(action.activityId, addWorkflowLevel1Prop(action.activity, action.programId)).pipe(
            tap((activity: Activity) => {
                const state = ctx.getState();
                const index = state.items.findIndex(activity => activity.id === action.activityId);
                const activities = [...state.items];
                activities[index] = addProgramIdProp(activity);
                ctx.patchState({
                    items: activities,
                });
            }),
        );
    }
}
