import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';
import * as MyActions from './app.actions';
import { ApiService } from './core/services/api.service';
import { SharedModule } from './shared/shared.module';

describe('App Effects', () => {
    let effects: AppEffects;
    let actions: Observable<any>;
    let apiServiceSpy: jasmine.SpyObj<ApiService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('ApiService', ['getPrograms', 'getActivities']);
        TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            providers: [
                AppEffects,
                provideMockActions(() => actions),
                { provide: ApiService, useValue: spy }
            ],
        });
        apiServiceSpy = TestBed.get(ApiService);
        effects = TestBed.get(AppEffects);
    });

    describe('Add', () => {
        it('should dispatch FetchDataSuccess action', () => {
            apiServiceSpy.getPrograms.and.returnValue(of([]));
            apiServiceSpy.getActivities.and.returnValue(of([]));
            const action = new MyActions.FetchData();
            const completion = new MyActions.FetchDataSuccess({programs: [], activities: []});
            actions = hot('--a-', { a: action });
            const expected = cold('--b', { b: completion });
            expect(effects.fetch$).toBeObservable(expected);
        });
    });

});
