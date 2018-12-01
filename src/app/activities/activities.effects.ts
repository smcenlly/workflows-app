import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
    ActivitiesActionTypes,
    ActivitiesActions,
    AddActivity,
    AddActivitySuccess,
    DeleteActivity,
    DeleteActivitySuccess,
    AddActivityError,
    DeleteActivityError,
    EditActivity,
    EditActivitySuccess,
    EditActivityError
} from './activities.actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { addWorkflowLevel1Prop, addProgramIdProp } from '../core/services/utility';
import { SnackBarService } from '../core/services/snackbar.service';
import { Router } from '@angular/router';

@Injectable()
export class ActivitiesEffects {

    @Effect()
    add$: Observable<ActivitiesActions> = this.actions$
        .ofType<AddActivity>(ActivitiesActionTypes.AddActivity)
        .pipe(
            switchMap(action => this.service.addActivity(addWorkflowLevel1Prop(action.activity, action.programId)).pipe(
                map(data => {
                    this.sb.emitSuccessSnackBar(`Successfully added activity ${data.name}`);
                    this.router.navigate(['programs', action.programId, 'activities']);
                    return new AddActivitySuccess(addProgramIdProp(data));
                }),
                // withLatestFrom(this.store),
                catchError(err => {
                    this.sb.emitErrorSnackBar();
                    return of(new AddActivityError(err));
                })
            )),
        );

    @Effect()
    edit$: Observable<ActivitiesActions> = this.actions$
        .ofType<EditActivity>(ActivitiesActionTypes.EditActivity)
        .pipe(
            switchMap(action =>
                this.service.updateActivity(action.activityId, addWorkflowLevel1Prop(action.activity, action.programId)).pipe(
                    map(data => {
                        this.sb.emitSuccessSnackBar(`Successfully updated activity ${data.name}`);
                        const activity = addProgramIdProp(data);
                        this.router.navigate(['programs', activity.programId, 'activities']);
                        return new EditActivitySuccess(activity);
                    }),
                    catchError(err => {
                        this.sb.emitErrorSnackBar();
                        return of(new EditActivityError(err));
                    })
                )),
        );

    @Effect()
    delete$: Observable<ActivitiesActions> = this.actions$
        .ofType<DeleteActivity>(ActivitiesActionTypes.DeleteActivity)
        .pipe(
            switchMap((action => this.service.deleteActivity(action.activityId)
                .pipe(
                    map((_apiPayload) => new DeleteActivitySuccess(action.activityId)),
                    catchError(err => {
                        this.sb.emitErrorSnackBar();
                        return of(new DeleteActivityError(err));
                    })
                ))
            ));

    constructor(
        private actions$: Actions,
        // private store: Store<State>,
        private service: ApiService,
        private router: Router,
        private sb: SnackBarService
    ) { }
}
