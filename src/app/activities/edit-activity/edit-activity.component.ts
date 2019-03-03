import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProgramState } from 'src/app/store/entity/states/program/program.state';
import { ActivityState } from 'src/app/store/entity/states/activity/activity.state';
import { EditActivity } from 'src/app/store/entity/states/activity/activity.actions';

@Component({
    selector: 'app-edit-activity',
    templateUrl: './edit-activity.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditActivityComponent implements OnInit {
    programId: number;
    activityId: number;
    programName$: Observable<string>;
    activity$: Observable<Activity>;

    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit() {
        this.programId = parseInt(this.route.snapshot.params['programId'], 10);
        this.activityId = parseInt(this.route.snapshot.params['activityId'], 10);
        this.programName$ = this.store.select(ProgramState.selectProgramName).pipe(map(fn => fn(this.programId)));
        this.activity$ = this.store.select(ActivityState.selectActivityByActivityId).pipe(map(fn => fn(this.activityId)));
    }

    onSubmitted(x: Activity) {
        this.store.dispatch(new EditActivity(this.activityId, x, this.programId));
    }
}
