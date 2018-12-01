import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsListComponent } from './programs-list.component';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeature from '../programs.reducer';
import { SharedModule } from '../../shared/shared.module';
import { FetchDataSuccess } from 'src/app/app.actions';

describe('ProgramsListComponent', () => {
    let component: ProgramsListComponent;
    let fixture: ComponentFixture<ProgramsListComponent>;
    let store: Store<fromFeature.State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                StoreModule.forRoot({
                    ...fromRoot.reducers,
                    feature: combineReducers(fromFeature.reducer),
                }),
            ],
            declarations: [ProgramsListComponent]
        })
            .compileComponents();
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(ProgramsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Setting up fake data', () => {
        beforeEach(() => {
            const fakePrograms = Array.from({ length: 20 }, (_, i) => ({ id: i + 20, name: 'a' }));
            const payload = { programs: fakePrograms, activities: [] };
            const action = new FetchDataSuccess(payload);
            store.dispatch(action);
        });

        it('should display a list of progarms', () => {
            component.programs$.subscribe(data => {
                expect(data.length).toBe(10);
            });
        });

        it('should should get right pageCount', () => {
            component.programsCount$.subscribe(data => {
                expect(data).toBe(20);
            });
        });
    });



});
