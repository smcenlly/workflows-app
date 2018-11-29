import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UiActionTypes } from './ui.actions';

@Injectable()
export class UiEffects {

  // @Effect()
  // loadFoos$ = this.actions$.pipe(ofType(UiActionTypes.LoadUis));

  constructor(private actions$: Actions) {}
}
