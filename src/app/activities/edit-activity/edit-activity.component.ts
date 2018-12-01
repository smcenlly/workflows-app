import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State, selectProgramName, selectActivityName } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { EditActivity } from '../activities.actions';


@Component({
    selector: 'app-edit-activity',
    templateUrl: './edit-activity.component.html',
})
export class EditActivityComponent implements OnInit {

    programId: string;
    activityId: string;
    programName$: Observable<string>;
    activityName$: Observable<string>;

    constructor(
        private store: Store<State>,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.programId = this.route.snapshot.params['programId'];
        this.activityId = this.route.snapshot.params['activityId'];
        this.programName$ = this.store.select(selectProgramName(this.programId));
        this.activityName$ = this.store.select(selectActivityName(this.activityId));
    }

    onSubmitted(x: Activity) {
        this.store.dispatch(new EditActivity(parseInt(this.activityId, 10), x));
    }

}
