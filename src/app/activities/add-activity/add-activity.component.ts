import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State, selectProgramName } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { AddActivity } from '../activities.actions';

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
})
export class AddActivityComponent implements OnInit {
    programId: string;
    programName$: Observable<string>;

    constructor(
        private store: Store<State>,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.programId = this.route.snapshot.params['programId'];
        this.programName$ = this.store.select(selectProgramName(this.programId));
    }

    onSubmitted(x: Activity) {
        this.store.dispatch(new AddActivity(x, parseInt(this.programId, 10)));
    }


}
