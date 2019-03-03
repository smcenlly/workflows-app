import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { convertDateToReadableForm } from 'src/app/core/services/date-utility';
import { SharedState } from 'src/app/store/shared/shared.state';
import { map } from 'rxjs/operators';
import { ChangeActivitiesPage } from 'src/app/store/shared/shared.actions';
import { ActivityState } from 'src/app/store/entity/states/activity/activity.state';
import { ProgramState } from 'src/app/store/entity/states/program/program.state';
import { DeleteActivity } from 'src/app/store/entity/states/activity/activity.actions';

@Component({
    selector: 'app-activities-list',
    templateUrl: './activities-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesListComponent implements OnInit {
    activities$: Observable<Activity[]>;
    currentPage$: Observable<number>;
    activitiesCount$: Observable<number>;
    programName$: Observable<string>;
    programId: number;
    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit() {
        this.programId = parseInt(this.route.snapshot.params['programId'], 10);
        this.activities$ = this.store.select(ActivityState.selectTenActivities).pipe(map(fn => fn(this.programId)));
        this.activitiesCount$ = this.store.select(ActivityState.selectActivitiesCount).pipe(map(fn => fn(this.programId)));
        this.currentPage$ = this.store.select(SharedState.selectAtivitiesPageNumber).pipe(map(fn => fn(this.programId)));
        this.programName$ = this.store.select(ProgramState.selectProgramName).pipe(map(fn => fn(this.programId)));
    }

    changePage(e: { page: number }) {
        this.store.dispatch(new ChangeActivitiesPage(this.programId, e.page));
    }

    convertDate(str) {
        return convertDateToReadableForm(str);
    }

    delete(activity) {
        return this.store.dispatch(new DeleteActivity(activity.id));
    }
}
