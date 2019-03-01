import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesListComponent } from './activities-list.component';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeature from '../activities.reducer';
import { SharedModule } from '../../shared/shared.module';
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
        // expect(fixture).toMatchSnapshot();
        component = fixture.componentInstance;
        fixture.detectChanges();

    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('setting up fake data', () => {
        beforeEach(() => {
            const fakePrograms = Array.from({ length: 3 }, (_, i) => ({ id: i , name: `a${i}` }));
            const fakeActivities = Array.from({ length: 30 }, (_, i) => ({ id: i , programId: 1, name: 'p' }))
                .concat( Array.from({ length: 5 }, (_, i) =>  ({ id: i , programId: 2, name: 'a' })) );

            const payload = { programs: fakePrograms, activities: fakeActivities };
            const action = new FetchDataSuccess(payload);
            store.dispatch(action);
        });

        it('should display a list of activities', () => {
            component.activities$.subscribe(data => {
                expect(data.length).toBe(10);
            });
        });

        it('should display program name', () => {
            component.programName$.subscribe(data => {
                expect(data).toBe('a1');
            });
        });

        it('should should get right pageCount', () => {
            component.activitiesCount$.subscribe(data => {
                expect(data).toBe(30);
            });
        });

    });


});
