import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State, selectProgramName } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { AddActivity } from '../activities.actions';

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddActivityComponent implements OnInit {
    programId: number;
    programName$: Observable<string>;

    constructor(
        private store: Store<State>,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.programId = parseInt(this.route.snapshot.params['programId'], 10);
        this.programName$ = this.store.select(selectProgramName(this.programId));
    }

    onSubmitted(x: Activity) {
        this.store.dispatch(new AddActivity(x, this.programId));
    }


}
