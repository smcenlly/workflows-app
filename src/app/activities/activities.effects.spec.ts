import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { ActivitiesEffects } from './activities.effects';
import * as MyActions from './activities.actions';
import { Activity } from './models/Activity';
import { ApiService } from '../core/services/api.service';

describe('My Effects', () => {
    let effects: ActivitiesEffects;
    let actions: Observable<any>;
    let apiServiceSpy: jasmine.SpyObj<ApiService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('ApiService', ['addActivity']);
        TestBed.configureTestingModule({
            imports: [
                // any modules needed
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

    fit('should work', () => {

        const activity: Activity = { id: 4, name: 'p', endDate: '13/09/1998', startDate: '13/09/1998' };
        apiServiceSpy.addActivity.and.returnValue(activity);
        console.log('apiserv', apiServiceSpy)
        const action = new MyActions.AddActivity(activity, 1);
        const completion = new MyActions.AddActivitySuccess(activity);

        // Refer to 'Writing Marble Tests' for details on '--a-' syntax
        actions = hot('--a-', { a: action });
        const expected = cold('--b', { b: completion });
        console.log('expected', expected)
        console.log('expected', effects.ad$)
        expect(effects.ad$).toBeObservable(expected);
    });

    // fit('should work also', () => {
    //     const activity: Activity = { id: 4, name: 'p', endDate: '13/09/1998', startDate: '13/09/1998' };
    //     actions = new ReplaySubject(1);
    //     actions.next(new MyActions.AddActivity(activity , 1));

    //     effects.ad$.subscribe(result => {

    //         console.log('res', result)
    //         // expect(result).toEqual(MyActions.AddActivity);
    //     });
        

    // });
});
