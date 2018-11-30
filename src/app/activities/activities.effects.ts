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
    DeleteActivityError
} from './activities.actions';
import { map, exhaustMap, withLatestFrom, tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { addWorkflowLevel1Prop } from '../core/services/utility';
import { Activity } from './models/Activity';
const activity: Activity = { id: 4, name: 'p', expected_end_date: '13/09/1998', expected_start_date: '13/09/1998' };
// import { go } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { SnackBarService } from '../core/services/snackbar.service';
import { Router } from '@angular/router';

@Injectable()
export class ActivitiesEffects {

    @Effect()
    add$: Observable<ActivitiesActions> = this.actions$
        .ofType<AddActivity>(ActivitiesActionTypes.AddActivity)
        .pipe(
            exhaustMap(action => this.service.addActivity(action.programId, addWorkflowLevel1Prop(action.activity))),
            map(data => new AddActivitySuccess(data)),
            // withLatestFrom(this.store),
            // tap((data) => this.router.navigate(['programs', data.activity.programId]))
            catchError(err => {
                this.sb.emitErrorSnackBar();
                return of(new AddActivityError(err));
            })
        );

    @Effect()
    delete$: Observable<ActivitiesActions> = this.actions$
        .ofType<DeleteActivity>(ActivitiesActionTypes.DeleteActivity)
        .pipe(
            exhaustMap(action => this.service.deleteActivity(action.activityId)),
            map(data => new DeleteActivitySuccess(data)),
            catchError(err => {
                this.sb.emitErrorSnackBar();
                return of(new DeleteActivityError(err));
            })
        );

    constructor(
        private actions$: Actions,
        // private store: Store<State>,
        private service: ApiService,
        // private router: Router,
        private sb: SnackBarService
    ) { }
}
