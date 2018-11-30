import { reducer, initialState, State } from './ui.reducer';
import { ChangeProgramPage, ChangeActivitiesPage } from './ui.actions';

describe('Ui Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('ChangeProgramPage action', () => {
    it('should return an updated state', () => {
      const action = new ChangeProgramPage(5);
      const result = reducer(initialState, action);
      expect(result).toEqual({programsPageNumber: 5, activitiesPageNumber: {}});
    });
  });

  describe('ChangeActivitiesPage action', () => {
    it('should return an updated state', () => {
      const action = new ChangeActivitiesPage({programId: 4, pageNumber: 2});
      const result = reducer(initialState, action);
      expect(result).toEqual({programsPageNumber: 1, activitiesPageNumber: {4: 2}});
    });
  });

});

