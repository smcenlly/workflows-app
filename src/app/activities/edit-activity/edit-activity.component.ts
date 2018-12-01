import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State, selectProgramName, selectActivityName, selectActivityByActivityId } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { EditActivity } from '../activities.actions';


@Component({
    selector: 'app-edit-activity',
    templateUrl: './edit-activity.component.html',
})
export class EditActivityComponent implements OnInit {

    programId: number;
    activityId: number;
    programName$: Observable<string>;
    activity$: Observable<Activity>;

    constructor(
        private store: Store<State>,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.programId = parseInt(this.route.snapshot.params['programId'], 10);
        this.activityId = parseInt(this.route.snapshot.params['activityId'], 10);
        this.programName$ = this.store.select(selectProgramName(this.programId));
        this.activity$ = this.store.select(selectActivityByActivityId(this.activityId));
    }

    onSubmitted(x: Activity) {
        this.store.dispatch(new EditActivity(this.activityId, this.programId, x));
    }

}
