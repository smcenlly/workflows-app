import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivityState, ActivityStateModel } from './activity.state';
import { FetchData } from 'src/app/store/shared/shared.actions';
import { apiResponsesStubs } from 'src/__stubs__/api_responses_stubs';
import { of } from 'rxjs';
import { SnackBarService } from 'src/app/core/services/snackbar.service';

describe('Activity store', () => {
    let store: Store;
    let apiServiceSpy: Partial<ApiService> = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([ActivityState])],
            providers: [
                { provide: ApiService, useValue: apiServiceSpy },
                {provide : SnackBarService, useValue: {emitSuccessSnackBar(){}, emitErrorSnackBar(){}}}
            
            ],
        }).compileComponents();
        store = TestBed.get(Store);
        apiServiceSpy = TestBed.get(ApiService);
    }));

    describe('fetchData', () => {
        it('should have the right info in store', async(() => {
            // const a = { id: 65, name: 'b', workflowlevel1: "https://dev-api.toladata.io/api/workflowlevel1/550/" }
            apiServiceSpy.getActivities = jest.fn(() => of(apiResponsesStubs.getActivities));
            const expected: ActivityStateModel = {
                items: apiResponsesStubs.getActivities,
            };
            // apiServiceSpy.getActivities.and.returnValue();
            store.dispatch(new FetchData());
            setTimeout(()=>{
                // const actual = store.selectSnapshot(ActivityState.getState);
                // expect(actual).toEqual({items: []});
                store.selectOnce(state => ActivityState.getState(state)).subscribe(message => {
                    // message
                    console.log('a', message)
                    expect(message).toEqual([]);
                })
    
            },1000)
            
        }));
    });
});
