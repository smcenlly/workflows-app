import * as fromMyReducers from './';

fdescribe('My Selectors', () => {
    describe('selectProgramsPageNumber', () => {
        it('should get page number', () => {
            expect(fromMyReducers.selectProgramsPageNumber.projector({ programsPageNumber: 5 })).toBe(5);
        });
    });

    describe('selectActivitiesForAProgram', () => {
        it('should get only activities for a program', () => {
            expect(fromMyReducers.selectActivitiesForAProgram('2')
                .projector(
                    [
                        { programId: '2', name: 'third-activity' },
                        { programId: '1', name: 'first-activity' },
                        { programId: '2', name: 'second-activity' },
                    ])).toEqual([
                        { programId: '2', name: 'third-activity' },
                        { programId: '2', name: 'second-activity' }
                    ]);
        });
    });

    describe('selectProgramsPageNumber', () => {
        it('should get only activities for a program', () => {
            expect(fromMyReducers.selectProgramsPageNumber
                .projector(
                    { programsPageNumber: 6, activitiesPageNumber: { '1': 2 } }
                )
            ).toBe(6);
        });
    });


    describe('selectActivitiesPageNumber', () => {
        it('should get only activities for a program', () => {
            expect(fromMyReducers.selectActivitiesPageNumber('1')
                .projector(
                    { programsPageNumber: 6, activitiesPageNumber: { '1': 2 } }
                )
            ).toBe(2);
        });
    });

    describe('selectTenPrograms', () => {
        let fakePrograms;
        beforeAll(() => {
            fakePrograms = Array.from({ length: 20 }, (_, i) => ({ id: i + 20 }));
        });

        it('should get only 10 programs based on page number', () => {
            const result = fromMyReducers.selectTenPrograms.projector(fakePrograms, 2);
            expect(result.length).toBe(10);
            expect(result[0].id).toBe(30);
        });
    });

    describe('selectTenActivities', () => {
        let fakePrograms;
        let fakeActivities;
        beforeAll(() => {
            fakePrograms = Array.from({ length: 20 }, (_, i) => ({ id: i + 20 }));
            fakeActivities = Array.from({ length: 5 }, (_, i) => ({ id: i + 20, programId: 2 }))
            .concat(
                Array.from({ length: 30 }, (_, i) => ({ id: i + 20, programId: 1 }))
            );
        });

        it('should get maximum 10 programs based on page number and based on the project number selected', () => {
            const result = fromMyReducers.selectTenActivities(1).projector(fakeActivities, 1);
            expect(result.length).toBe(5);
            expect(result[0].programId).toBe(2);
        });
    });

});

