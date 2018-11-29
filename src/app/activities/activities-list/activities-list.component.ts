import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from '../models/program';
import { Store } from '@ngrx/store';
import { getActivities, State } from 'src/app/reducers';
import { FetchActivities } from '../activities.actions';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  activities$: Observable<Program[]>;
  currentPage: number;
  constructor(private store: Store<State>) { }

  ngOnInit() {
      this.activities$ = this.store.select(getActivities);
      this.store.dispatch(new FetchActivities('a'));
  }

}
