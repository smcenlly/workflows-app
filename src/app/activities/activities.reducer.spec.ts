import * as fromActivities from './activities.reducer';
import { AddActivitySuccess, DeleteActivitySuccess } from './activities.actions';
import { FetchDataSuccess } from '../app.actions';

describe('Activities Reducer', () => {
    describe('Fetching Data', () => {
        let state;
        beforeAll(() => {
            const { initialState } = fromActivities;
            const action = new FetchDataSuccess({
                programs: [
                    { id: 1, name: 'program-name' }
                ],
                activities: [
                    { id: 22, name: 'activity-name' }
                ]
            });
            state = fromActivities.reducer(initialState, action);
        });

        it('should load data into entities', () => {
            expect(state).toEqual({
                entities: { 22: { id: 22, name: 'activity-name' } },
                ids: [22]
            });
        });

        describe('Adding an activity', () => {
            it('should have one more entity', () => {
                const payload = { id: 54, name: 'abn' };
                const action = new AddActivitySuccess(payload);
                const result = fromActivities.reducer(state, action);
                expect(result.ids).toEqual([22, 54]);
                expect(result.entities[54]).toBeTruthy();
            });
        });

        describe('deleting an activity action', () => {
            it('should have one less entity', () => {
                const action = new DeleteActivitySuccess(22);
                const result = fromActivities.reducer(state, action);
                expect(result).toEqual({
                    entities: {},
                    ids: []
                });
            });
        });
    });
});
