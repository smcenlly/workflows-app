import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectAllActivities } from 'src/app/reducers';
import { FetchActivities } from '../activities.actions';
import { Activity } from '../models/Activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  activities$: Observable<Activity[]>;
  currentPage: number;
  constructor(private store: Store<State>) { }

  ngOnInit() {
      this.activities$ = this.store.select(selectAllActivities);
      this.store.dispatch(new FetchActivities('a'));
  }

}
