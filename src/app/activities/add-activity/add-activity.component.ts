import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { AddActivity } from '../activities.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
})
export class AddActivityComponent implements OnInit {
    programId: number;

    constructor(
        private store: Store<State>,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.programId = this.route.snapshot.params['programId'];
    }

    onSubmitted(x: Activity) {
        this.store.dispatch(new AddActivity(x, this.programId));
    }


}
