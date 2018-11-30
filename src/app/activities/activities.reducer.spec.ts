import * as fromActivities from './activities.reducer';
import { FetchActivities, FetchActivitiesSuccess, AddActivitySuccess,
    EditActivitySuccess, DeleteActivitySuccess } from './activities.actions';

describe('Activities Reducer', () => {
    describe('Fetch action', () => {
        it('should work', () => {
            const { initialState } = fromActivities;
            const action = new FetchActivities();
            const result = fromActivities.reducer(initialState, action);
            expect(result.entities).toEqual({});
        });
    });


    describe('Add success action', () => {
        it('should work', () => {
            const { initialState } = fromActivities;
            const payload = { id: 54, name: 'activity-name', startDate: '12/10/1998', endDate: '12/10/1998' };
            const action = new AddActivitySuccess(payload);
            const result = fromActivities.reducer(initialState, action);
            expect(result.ids).toEqual([54]);
            expect(result.entities[54]).toBeTruthy();
        });
    });

    describe('Delete success action', () => {
        let initialState;
        beforeEach(() => {
            const payload = [{ id: 1, name: 'activity-name', startDate: '12/10/1998', endDate: '12/10/1998' }];
            const action = new FetchActivitiesSuccess(payload);
            initialState = fromActivities.reducer(initialState, action);
        });
        it('should work', () => {
            const action = new DeleteActivitySuccess(1);
            const result = fromActivities.reducer(initialState, action);
            expect(result).toEqual({
                entities: {},
                ids: []
            });
        });
    });


});
