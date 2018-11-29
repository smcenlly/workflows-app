import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProgramsActionTypes, ProgramsActions, FetchPrograms, FetchProgramsSuccess, FetchProgramsError } from './programs.actions';
import { withLatestFrom, switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './programs.reducer';
import { ApiService } from '../core/services/api.service';
// import { getCurrentPage } from '../reducers';

@Injectable()
export class ProgramsEffects {
    @Effect()
    fetch$: Observable<ProgramsActions> = this.actions$
        .ofType(ProgramsActionTypes.FetchPrograms)
        .pipe(
            tap(() => {
                console.log('hehhe');
            }),
            withLatestFrom(this.store),
            switchMap(([action, state]) =>
                this.service.getPrograms().pipe(
                    map(data => new FetchProgramsSuccess(data)),
                    catchError(err => of(new FetchProgramsError(err)))
                )
            )
        );

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private service: ApiService
    ) { }
}
