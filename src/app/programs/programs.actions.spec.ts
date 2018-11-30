import { ProgramsActionTypes, FetchPrograms, FetchProgramsSuccess } from './programs.actions';
import { Program } from './models/program';



describe('FetchPrograms', () => {
    it('should create an action', () => {
        const action = new FetchPrograms();
        expect({...action}).toEqual({ type: ProgramsActionTypes.FetchPrograms });
    });

    describe('FetchProgramsSuccess', () => {
        it('should create an action', () => {
            const payload: Program[] = [
                {
                    id: 1,
                    name: 'Program #1',
                },
                {
                    id: 2,
                    name: 'Program #2',
                },
            ];
            const action = new FetchProgramsSuccess(payload);

            expect({ ...action }).toEqual({
                type: ProgramsActionTypes.FetchProgramsSuccess,
                payload,
            });
        });
    });

});


