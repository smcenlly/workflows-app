// import * as fromMyReducers from './';

// describe('Selectors', () => {
//     describe('selectProgramsPageNumber', () => {
//         it('should get page number', () => {
//             expect(fromMyReducers.selectProgramsPageNumber.projector({ programsPageNumber: 5 })).toBe(5);
//         });
//     });

//     describe('selectActivitiesForAProgram', () => {
//         it('should get only activities for a program', () => {
//             expect(fromMyReducers.selectActivitiesForAProgram('2')
//                 .projector(
//                     [
//                         { programId: '2', name: 'third-activity' },
//                         { programId: '1', name: 'first-activity' },
//                         { programId: '2', name: 'second-activity' },
//                     ])).toEqual([
//                         { programId: '2', name: 'third-activity' },
//                         { programId: '2', name: 'second-activity' }
//                     ]);
//         });
//     });

//     describe('selectProgramsPageNumber', () => {
//         it('should get only activities for a program', () => {
//             expect(fromMyReducers.selectProgramsPageNumber
//                 .projector(
//                     { programsPageNumber: 6, activitiesPageNumber: { '1': 2 } }
//                 )
//             ).toBe(6);
//         });
//     });

//     describe('selectActivitiesPageNumber', () => {
//         it('should get only activities for a program', () => {
//             expect(fromMyReducers.selectActivitiesPageNumber(1)
//                 .projector(
//                     { programsPageNumber: 6, activitiesPageNumber: { 1: 4 } }
//                 )
//             ).toBe(4);
//         });

//         it('should default to 1', () => {
//             expect(fromMyReducers.selectActivitiesPageNumber(1)
//                 .projector(
//                     { programsPageNumber: 6, activitiesPageNumber: {} }
//                 )
//             ).toBe(1);
//         });
//     });

//     describe('selectTenPrograms', () => {
//         let fakePrograms;
//         beforeAll(() => {
//             fakePrograms = Array.from({ length: 20 }, (_, i) => ({ id: i + 20 }));
//         });

//         it('should get only 10 programs based on page number', () => {
//             const result = fromMyReducers.selectTenPrograms.projector(fakePrograms, 2);
//             expect(result.length).toBe(10);
//             expect(result[0].id).toBe(30);
//         });
//     });

//     describe('selectProgramName', () => {
//         let fakePrograms;
//         beforeAll(() => {
//             fakePrograms = Array.from({ length: 20 }, (_, i) => ({ id: i + 20, name: i + 40 }));
//         });

//         it('should get program name by id', () => {
//             const result = fromMyReducers.selectProgramName(21).projector(fakePrograms);
//             expect(result).toBe(41);
//         });

//         it('should return undefined if program not there', () => {
//             const result = fromMyReducers.selectProgramName(21444).projector(fakePrograms);
//             expect(result).toBe(undefined);
//         });
//     });

//     describe('selectActivityName', () => {
//         let fakeActivities;
//         beforeAll(() => {
//             fakeActivities = Array.from({ length: 20 }, (_, i) => ({ id: i + 20, name: i + 40 }));
//         });

//         it('should get program name by id', () => {
//             const result = fromMyReducers.selectActivityName(21).projector(fakeActivities);
//             expect(result).toBe(41);
//         });

//         it('should return undefined if program not there', () => {
//             const result = fromMyReducers.selectActivityName(21444).projector(fakeActivities);
//             expect(result).toBe(undefined);
//         });
//     });

//     describe('selectActivityByActivityId', () => {
//         let fakeActivities;
//         beforeAll(() => {
//             fakeActivities = Array.from({ length: 20 }, (_, i) => ({ id: i + 20, name: i + 40 }));
//         });
//         it('should get activity by activityIdd', () => {
//             const result = fromMyReducers.selectActivityByActivityId(20).projector(fakeActivities);
//             expect(result).toEqual({id: 20, name: 40});
//         });
//     });
// });
