import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject, BehaviorSubject, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { ActivitiesEffects } from './activities.effects';
import * as MyActions from './activities.actions';
import { Activity } from './models/Activity';
import { ApiService } from '../core/services/api.service';
import { SharedModule } from '../shared/shared.module';

describe('Activities Effects', () => {
    let effects: ActivitiesEffects;
    let actions: Observable<any>;
    let apiServiceSpy: jasmine.SpyObj<ApiService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('ApiService', ['addActivity', 'deleteActivity']);
        TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            providers: [
                ActivitiesEffects,
                provideMockActions(() => actions),
                { provide: ApiService, useValue: spy }
            ],
        });
        apiServiceSpy = TestBed.get(ApiService);
        effects = TestBed.get(ActivitiesEffects);
    });

    describe('Add', () => {
        fit('should dispatch activity success action', () => {
            const activity: Activity = { id: 4, name: 'p', expected_end_date: '13/09/1998', expected_start_date: '13/09/1998' };
            apiServiceSpy.addActivity.and.returnValue(of(activity));
            const action = new MyActions.AddActivity(activity, 1);
            const completion = new MyActions.AddActivitySuccess(activity);
            actions = hot('--a-', { a: action });
            const expected = cold('--b', { b: completion });
            expect(effects.add$).toBeObservable(expected);
        });
    });


    describe('Delete', () => {
        fit('should dispatch activity success action', () => {
            apiServiceSpy.deleteActivity.and.returnValue(of(true));
            const action = new MyActions.DeleteActivity(4);
            const completion = new MyActions.DeleteActivitySuccess(4);
            actions = hot('--a-', { a: action });
            const expected = cold('--b', { b: completion });
            expect(effects.delete$).toBeObservable(expected);
        });
    });


});
