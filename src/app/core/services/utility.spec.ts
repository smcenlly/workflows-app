import { tenBasedOnPageNumber, addProgramIdProp, addWorkflowLevel1Prop } from './utility';
import { Activity } from 'src/app/activities/models/Activity';

describe('Utility', () => {
    describe('tenBasedOnPageNumber', () => {
        it('should return 10 items from the array', () => {
            const arr = Array.from({ length: 20 }, (_, i) => ({ id: i, name: 'a' }));
            const actual = tenBasedOnPageNumber(2, arr);
            expect(actual[0].id).toBe(10);
        });
    });

    describe('addProgramIdProp', () => {
        it('should add prop correctly', () => {
            const activity: Activity = { id: 1, name: 'a', workflowlevel1: 'https://dev-api.toladata.io/api/workflowlevel1/54/' };
            const actual = addProgramIdProp(activity);
            expect(actual.programId).toBe(54);
        });
    });


    describe('addWorkflowLevel1Prop', () => {
        it('should add prop correctly', () => {
            const activity: Activity = { id: 1, name: 'a' };
            const actual = addWorkflowLevel1Prop(activity, 54);
            expect(actual.workflowlevel1).toBe('https://dev-api.toladata.io/api/workflowlevel1/54/');
        });
    });


    // describe('convertDateToReadableForm', () => {
    //     it('should work', () => {
    //         const actual = convertDateToAPIReadableFormat('13.11.2018');
    //         expect(actual).toBe('2018-11-13T23:00:00+01:00');
    //     });
    // });


});


