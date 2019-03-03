import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Activity } from '../models/Activity';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProgramState } from 'src/app/store/entity/states/program/program.state';
import { AddActivity } from 'src/app/store/entity/states/activity/activity.actions';

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddActivityComponent implements OnInit {
    programId: number;
    programName$: Observable<string>;

    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit() {
        this.programId = parseInt(this.route.snapshot.params['programId'], 10);
        this.programName$ = this.store.select(ProgramState.selectProgramName).pipe(map(fn => fn(this.programId)));
    }

    onSubmitted(x: Activity) {
        this.store.dispatch(new AddActivity(x, this.programId));
    }
}
