import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesListComponent } from './activities-list.component';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeature from '../activities.reducer';
import { SharedModule } from '../../shared/shared.module';
import { FetchActivitiesSuccess } from '../activities.actions';
import { FetchDataSuccess } from '../../app.actions';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActivitiesListComponent', () => {
    let component: ActivitiesListComponent;
    let fixture: ComponentFixture<ActivitiesListComponent>;
    let store: Store<fromFeature.State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule,
                StoreModule.forRoot({
                    ...fromRoot.reducers,
                    feature: combineReducers(fromFeature.reducer),
                }),
            ],
            declarations: [ActivitiesListComponent],
            providers: [
                {
                    provide: ActivatedRoute, useValue: {
                        snapshot: {
                            params: {
                                programId: 1
                            }
                        },
                    }
                }

            ]
        })
            .compileComponents();
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(ActivitiesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should display a list of activities', () => {
        const fakePrograms = Array.from({ length: 20 }, (_, i) => ({ id: i + 20, name: 'a' }));
        const fakeActivities = Array.from({ length: 5 }, (_, i) =>
            ({ id: i + 20, programId: 2, name: 'p', expected_start_date: '12/4/1998', expected_end_date: '12/4/1998' }))
            .concat(
                Array.from({ length: 30 }, (_, i) =>
                    ({ id: i + 20, programId: 1, name: 'a', expected_start_date: '12/4/1998', expected_end_date: '12/4/1998' }))
            );

        const payload = { programs: fakePrograms, activities: fakeActivities };
        const action = new FetchDataSuccess(payload);
        store.dispatch(action);

        component.activities$.subscribe(data => {
            expect(data.length).toBe(10);
        });
    });

});
