import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { FetchData } from './store/shared/shared.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    title = 'programs-app';
    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(new FetchData());
    }
}
