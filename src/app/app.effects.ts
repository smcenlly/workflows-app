import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from './core/services/api.service';
import { AppActionTypes, FetchDataSuccess, AppActions } from './app.actions';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { addProgramIdProp } from './core/services/utility';


@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private service: ApiService
    ) { }

    @Effect()
    fetch$: Observable<AppActions> = this.actions$
        .ofType(AppActionTypes.FetchData)
        .pipe(
            switchMap((action) => {
                return forkJoin([this.service.getPrograms(), this.service.getActivities()]).pipe(
                    map(([programs, activities]) => {
                        activities = activities.map(activity => addProgramIdProp(activity));
                        return new FetchDataSuccess({ programs, activities });
                    })
                );
            })
        );
}
