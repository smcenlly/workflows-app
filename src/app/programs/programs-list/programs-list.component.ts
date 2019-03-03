import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from '../models/program';
import { Store, Select } from '@ngxs/store';
import { ProgramState } from 'src/app/store/entity/states/program/program.state';
import { ChangeProgramPage } from 'src/app/store/shared/shared.actions';

@Component({
    selector: 'app-programs-list',
    templateUrl: './programs-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramsListComponent {
    constructor(private store: Store) {}

    @Select(ProgramState.selectTenPrograms) programs$: Observable<Program[]>;
    @Select(s => s.sharedstate.programsPageNumber) currentPage$: Observable<number>;
    @Select(ProgramState.selectProgramsCount) programsCount$: Observable<number>;

    changePage(e: { page: number }) {
        this.store.dispatch(new ChangeProgramPage(e.page));
    }

    hasActivities(programId) {
        // return this.store.pipe(select(doesProgramHaveActivities(programId)));
    }
}
