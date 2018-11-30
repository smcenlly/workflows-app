// import { TestBed } from '@angular/core/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { ReplaySubject, Subject } from 'rxjs';
// // import { hot, cold } from 'jasmine-marbles';
// import { Observable } from 'rxjs';

// import { ProgramsEffects } from './programs.effects';
// import * as MyActions from './programs.actions';
// import { Store } from '@ngrx/store';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

// describe('My Effects', () => {
//   let effects: ProgramsEffects;
//   let actions: Subject<any>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientModule
//       ],
//       providers: [
//         ProgramsEffects,
//         provideMockActions(() => actions),
//         {provide: Store, useValue: {}},
//         HttpClient
//         // other providers
//       ],
//     });
//     // private actions$: Actions,
//     // private store: Store<State>,
//     // private service: ApiService

//     effects = TestBed.get(ProgramsEffects);
//   });

// //   it('should work', () => {
// //     const action = new MyActions.FetchPrograms();
// //     const completion = new MyActions.FetchProgramsSuccess([]);

// //     // Refer to 'Writing Marble Tests' for details on '--a-' syntax
// //     actions = hot('--a-', { a: action });
// //     const expected = cold('--b', { b: completion });

// //     expect(effects.fetch$).toBeTruthy();
// //   });

//   it('should work also', () => {
//     // actions = new ReplaySubject(1);
//     // actions.next(MyActions.FetchPrograms);
//     effects.fetch$.subscribe(result => {
//         console.log('e', result);
//     //   expect(result).toEqual(AnotherAction);
//     });
//   });
// });
