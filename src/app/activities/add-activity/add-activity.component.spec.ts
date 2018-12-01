import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddActivityComponent } from './add-activity.component';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeature from '../activities.reducer';
import { SharedModule } from '../../shared/shared.module';
import { FetchDataSuccess } from '../../app.actions';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddActivity } from '../activities.actions';
import { ActivityFormComponent } from '../activity-form/activity-form.component';
import { ActivitiesModule } from '../activities.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

describe('AddActivityComponent', () => {
    let component: AddActivityComponent;
    let fixture: ComponentFixture<AddActivityComponent>;
    let store: Store<fromFeature.State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BsDatepickerModule.forRoot(),
                RouterTestingModule,
                SharedModule,
                StoreModule.forRoot({
                    ...fromRoot.reducers,
                    feature: combineReducers(fromFeature.reducer),
                }),
            ],
            declarations: [AddActivityComponent, ActivityFormComponent],
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
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(AddActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        const payload = { programs: [{ id: 1, name: 'a' }], activities: [{ id: 65, name: 'b' }] };
        const action = new FetchDataSuccess(payload);
        store.dispatch(action);
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display program name', () => {
        component.programName$.subscribe(data => {
            expect(data).toBe('a');
        });
    });


    it('should dispatch an action on submitting form', () => {
        const newActivity = {id: 4, name: 'a'};
        component.onSubmitted(newActivity);
        const action = new AddActivity(newActivity, parseInt(component.programId, 10));
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

});
