import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectTenActivities, selectActivitiesCountForAProgram, selectActivitiesPageNumber } from 'src/app/reducers';
import { Activity } from '../models/Activity';
import { ChangeActivitiesPage } from '../../ui/ui.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {


  activities$: Observable<Activity[]>;
  currentPage$: Observable<number>;
  activitiesCount$: Observable<number>;
  programId: string;
  constructor(private store: Store<State>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.programId = this.route.snapshot.params['programId'];
    this.activities$ = this.store.select(selectTenActivities(this.programId));
    this.activitiesCount$ = this.store.select(selectActivitiesCountForAProgram(this.programId));
    this.currentPage$ = this.store.select(selectActivitiesPageNumber(this.programId));
  }

  changePage(e: { page: number }) {
    this.store.dispatch(new ChangeActivitiesPage({programId: 1, pageNumber: e.page}));
  }



}
