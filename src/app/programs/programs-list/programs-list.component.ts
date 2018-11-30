import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from '../models/program';
import { Store } from '@ngrx/store';
import {  State, selectTenPrograms, selectAllPrograms, selectProgramsCount,
    selectProgramsPageNumber, doesProgramHaveActivities } from 'src/app/reducers';
import { FetchPrograms } from '../programs.actions';
import { ChangeProgramPage } from '../../ui/ui.actions';

@Component({
    selector: 'app-programs-list',
    templateUrl: './programs-list.component.html',
    styleUrls: ['./programs-list.component.css']
})
export class ProgramsListComponent implements OnInit {
    programs$: Observable<Program[]>;
    currentPage$: Observable<number>;
    programsCount$: Observable<number>;
    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.programs$ = this.store.select(selectTenPrograms);
        this.programsCount$ = this.store.select(selectProgramsCount);
        this.currentPage$ = this.store.select(selectProgramsPageNumber);
    }

    changePage(e: {page: number}) {
        this.store.dispatch(new ChangeProgramPage(e.page));
    }

    hasActivities(programId) {
        return this.store.select(doesProgramHaveActivities(programId));
    }
}
