import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsListComponent } from './programs-list.component';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromFeature from '../programs.reducer';
import { SharedModule } from '../../shared/shared.module';
import { FetchPrograms, FetchProgramsSuccess } from '../programs.actions';

fdescribe('ProgramsListComponent', () => {
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
      declarations: [ ProgramsListComponent ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data when created', () => {
    const action = new FetchPrograms();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display a list of items after the data is loaded', () => {
    const items = [{id: 's', name: 'a'}];
    const action = new FetchProgramsSuccess(items);

    store.dispatch(action);

    component.programs$.subscribe(data => {
      expect(data.length).toBe(items.length);
    });
  });

});
