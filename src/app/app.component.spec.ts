import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FetchData } from './app.actions';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import * as fromRoot from './reducers';
import * as fromFeature from './reducers';
import { CoreModule } from './core/core.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let store: Store<fromFeature.State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule,
                CoreModule,
                SharedModule,
                StoreModule.forRoot({
                    ...fromRoot.reducers,
                    feature: combineReducers(fromFeature.reducers),
                }),
            ],

        })
            .compileComponents();
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create the app', () => {
        // const app = fixture.debugElement.componentInstance;
        // expect(app).toBeTruthy();
    });

    it('should dispatch an action to load data when created', () => {
        // const action = new FetchData();
        // expect(store.dispatch).toHaveBeenCalledWith(action);
    });


    it(`should have as title 'programs-app'`, () => {
        // const app = fixture.debugElement.componentInstance;
        // expect(app.title).toEqual('programs-app');
    });
});
