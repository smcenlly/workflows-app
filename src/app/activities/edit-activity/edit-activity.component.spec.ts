import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeature from '../activities.reducer';
import { SharedModule } from '../../shared/shared.module';
import { FetchDataSuccess } from '../../app.actions';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivityFormComponent } from '../activity-form/activity-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EditActivityComponent } from './edit-activity.component';

describe('EditActivityComponent', () => {
    let component: EditActivityComponent;
    let fixture: ComponentFixture<EditActivityComponent>;
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
            declarations: [EditActivityComponent, ActivityFormComponent],
            providers: [
                {
                    provide: ActivatedRoute, useValue: {
                        snapshot: {
                            params: {
                                programId: 1,
                                activityId: 65
                            }
                        },
                    }
                }

            ]
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(EditActivityComponent);
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

    it('should display activity name', () => {
        component.activity$.subscribe(data => {
            expect(data.name).toBe('b');
        });
    });

});
