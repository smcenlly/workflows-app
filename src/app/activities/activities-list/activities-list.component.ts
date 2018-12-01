import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  State, selectTenActivities, selectActivitiesCountForAProgram,
  selectActivitiesPageNumber, selectProgramName
} from 'src/app/reducers';
import { Activity } from '../models/Activity';
import { ChangeActivitiesPage } from '../../ui/ui.actions';
import { ActivatedRoute } from '@angular/router';
import { convertDateToReadableForm } from 'src/app/core/services/date-utility';
import { DeleteActivity } from '../activities.actions';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
})
export class ActivitiesListComponent implements OnInit {

  activities$: Observable<Activity[]>;
  currentPage$: Observable<number>;
  activitiesCount$: Observable<number>;
  programName$: Observable<string>;
  programId: string;
  constructor(private store: Store<State>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.programId = this.route.snapshot.params['programId'];
    this.activities$ = this.store.select(selectTenActivities(parseInt(this.programId, 10)));
    this.activitiesCount$ = this.store.select(selectActivitiesCountForAProgram(this.programId));
    this.currentPage$ = this.store.select(selectActivitiesPageNumber(this.programId));
    this.programName$ = this.store.select(selectProgramName(this.programId));
  }

  changePage(e: { page: number }) {
    this.store.dispatch(new ChangeActivitiesPage({ programId: 1, pageNumber: e.page }));
  }

  convertDate(str) {
    return convertDateToReadableForm(str);
  }

  delete(activity) {
    return this.store.dispatch(new DeleteActivity(activity.id));
  }


}
