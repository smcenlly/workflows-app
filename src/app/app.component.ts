import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  State } from 'src/app/reducers';
import { FetchData } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'programs-app';
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new FetchData());
  }

}
