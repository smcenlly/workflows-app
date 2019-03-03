import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivityState, ActivityStateModel } from './activity.state';
import { FetchData } from 'src/app/store/shared/shared.actions';
import { apiResponsesStubs } from 'src/__stubs__/api_responses_stubs';
import { of } from 'rxjs';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { AddActivity } from './activity.actions';

describe('Activity store', () => {
    let store: Store;
    let apiServiceSpy: Partial<ApiService> = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([ActivityState])],
            providers: [
                { provide: ApiService, useValue: apiServiceSpy },
                { provide: SnackBarService, useValue: { emitSuccessSnackBar() { }, emitErrorSnackBar() { } } }

            ],
        }).compileComponents();
        store = TestBed.get(Store);
        apiServiceSpy = TestBed.get(ApiService);
    }));

    describe('fetchData', () => {
        it('should have the right info in store', async(() => {
            apiServiceSpy.getActivities = jest.fn(() => of(apiResponsesStubs.getActivities));
            store.dispatch(new FetchData());
            expect(store.selectSnapshot(ActivityState.getState)).toMatchSnapshot()
        }));
    });

    describe('add item', () => {
        it('should have the right info in store', async(() => {
            apiServiceSpy.addActivity = jest.fn(() => of(apiResponsesStubs.addActivity));
            store.dispatch(new AddActivity({
                id: null,
                expected_end_date: "2019-03-03T20:38:29.014Z",
                expected_start_date: "2019-03-03T20:38:29.014Z",
                name: "adggh",
                workflowlevel1: "https://dev-api.toladata.io/api/workflowlevel1/5/",
            }, 5));
            expect(store.selectSnapshot(ActivityState.getState)).toMatchSnapshot()
        }));
    });


    


});
