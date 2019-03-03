import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SharedState, SharedStateModel } from './shared.state';
import { ChangeProgramPage, ChangeActivitiesPage } from './shared.actions';
import { SharedModule } from 'src/app/shared/shared.module';

describe('Shared store', () => {
    let store: Store;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([SharedState]), SharedModule],
        }).compileComponents();
        store = TestBed.get(Store);
    }));

    describe('ChangeProgramPage action', () => {
        it('should return an updated state', () => {
            const expected: SharedStateModel = { programsPageNumber: 5, activitiesPageNumber: {} };
            store.dispatch(new ChangeProgramPage(5));
            const actual = store.selectSnapshot(SharedState.getState);
            expect(actual).toEqual(expected);
        });
    });

    describe('ChangeProgramPage action', () => {
        it('should return an updated state', () => {
            const expected: SharedStateModel = { programsPageNumber: 1, activitiesPageNumber: { 4: 2 } };
            store.dispatch(new ChangeActivitiesPage(4, 2));
            const actual = store.selectSnapshot(SharedState.getState);
            expect(actual).toEqual(expected);
        });
    });
});
