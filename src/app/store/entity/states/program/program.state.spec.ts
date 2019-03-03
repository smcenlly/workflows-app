import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ProgramState, ProgramStateModel } from './program.state';
import { ApiService } from 'src/app/core/services/api.service';
import { of } from 'rxjs';
import { apiResponsesStubs } from 'src/__stubs__/api_responses_stubs';
import { FetchData } from 'src/app/store/shared/shared.actions';
import { SharedModule } from '../../../../shared/shared.module';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

describe('Program store', () => {
    let store: Store;
    let apiServiceSpy: Partial<ApiService> = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([ProgramState]), SharedModule, MatSnackBarModule ],
            providers: [{ provide: ApiService, useValue: apiServiceSpy }],
        }).compileComponents();
        store = TestBed.get(Store);
        apiServiceSpy = TestBed.get(ApiService);
    }));

    describe('fetchData', () => {
        it('should have the right info in store', async(() => {
            // const a = { id: 65, name: 'b', workflowlevel1: "https://dev-api.toladata.io/api/workflowlevel1/550/" }
            // apiServiceSpy.getActivities = jest.fn(() => of(apiResponsesStubs.getActivities));
            // const expected: ProgramStateModel = {
            //     items: apiResponsesStubs.getActivities,
            // };
            // // apiServiceSpy.getActivities.and.returnValue();
            // store.dispatch(new FetchData());
            // const actual = store.selectSnapshot(ProgramState.getState);
            // expect(actual).toEqual(expected);
        }));
    });
});
