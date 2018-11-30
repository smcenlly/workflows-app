import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesListComponent } from './activities-list.component';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeature from '../activities.reducer';
import { SharedModule } from '../../shared/shared.module';
import { FetchActivitiesSuccess } from '../activities.actions';

describe('ActivitiesListComponent', () => {
  let component: ActivitiesListComponent;
  let fixture: ComponentFixture<ActivitiesListComponent>;
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
      declarations: [ActivitiesListComponent]
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


  it('should display a list of items after the data is loaded', () => {
    const items = [{
      id: 4, name: 'a',
      startDate: '12/04/1998', endDate: '12/04/1998'}];
    const action = new FetchActivitiesSuccess(items);

    store.dispatch(action);

    component.activities$.subscribe(data => {
      expect(data.length).toBe(items.length);
    });
  });

});
