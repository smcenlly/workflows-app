import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from '../models/program';
import { Store } from '@ngrx/store';
import { getPrograms, State } from 'src/app/reducers';
import { FetchPrograms } from '../programs.actions';

@Component({
    selector: 'app-programs-list',
    templateUrl: './programs-list.component.html',
    styleUrls: ['./programs-list.component.css']
})
export class ProgramsListComponent implements OnInit {
    programs$: Observable<Program[]>;
    currentPage: number;
    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.programs$ = this.store.select(getPrograms);
        this.store.dispatch(new FetchPrograms());
    }

}
