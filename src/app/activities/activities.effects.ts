import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActivitiesActionTypes, ActivitiesActions, FetchActivities,
   FetchActivitiesSuccess, FetchActivitiesError } from './activities.actions';
import { withLatestFrom, switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './activities.reducer';
import { ApiService } from '../core/services/api.service';
// import { getCurrentPage } from '../reducers';

@Injectable()
export class ActivitiesEffects {
    @Effect()
    fetch$: Observable<ActivitiesActions> = this.actions$
        .ofType<FetchActivities>(ActivitiesActionTypes.FetchActivities)
        .pipe(
            tap(() => {
                console.log('hehhe');
            }),
            withLatestFrom(this.store),
            switchMap(([action, state]) =>
                this.service.getActivitiesForProgram(action.selectedProgramId).pipe(
                    map(data => new FetchActivitiesSuccess(data)),
                    catchError(err => of(new FetchActivitiesError(err)))
                )
            )
        );

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private service: ApiService
    ) { }
}
