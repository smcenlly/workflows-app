import * as fromPrograms from './programs.reducer';
import { FetchDataSuccess } from '../app.actions';


describe('Programs Reducer', () => {
    describe('Fetch success action', () => {
        it('should set loading to true', () => {
            const { initialState } = fromPrograms;
            const action = new FetchDataSuccess({
                programs: [
                    { id: 1, name: 'program-name' }
                ],
                activities: []
            });
            const result = fromPrograms.reducer(initialState, action);
            expect(result).toEqual({
                entities: { 1: { id: 1, name: 'program-name' } },
                ids: [1]
            });
        });
    });
});
