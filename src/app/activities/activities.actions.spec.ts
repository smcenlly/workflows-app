import {
    ActivitiesActionTypes, FetchActivities, FetchActivitiesSuccess,
    AddActivitySuccess, EditActivitySuccess, DeleteActivitySuccess, DeleteActivity, EditActivity, AddActivity
} from './activities.actions';
import { Activity } from './models/activity';

describe('ActivitiesActions', () => {

    describe('FetchActivities', () => {
        it('should create an action', () => {
            const action = new FetchActivities();
            expect({ ...action }).toEqual({ type: ActivitiesActionTypes.FetchActivities });
        });
    });

    // describe('AddActivity', () => {
    //     it('should create an action', () => {
    //         const payload: Activity = {
    //             id: 1,
    //             name: 'Activity #1',
    //             startDate: '22/06/1999',
    //             endDate: '22/06/1999'
    //         };
    //         const action = new AddActivity(payload);
    //         expect(action).toEqual({ type: ActivitiesActionTypes.AddActivity, activity: payload });
    //     });
    // });



    // describe('EditActivity', () => {
    //     it('should create an action', () => {
    //         const payload: Activity = {
    //             id: 1,
    //             name: 'Activity #1',
    //             startDate: '22/06/1999',
    //             endDate: '22/06/1999'
    //         };

    //         const action = new EditActivity(1, payload);
    //         expect({ ...action }).toEqual({ type: ActivitiesActionTypes.EditActivity, activityId: 1, activity: payload });
    //     });
    // });


    // describe('DeleteActivity', () => {
    //     it('should create an action', () => {
    //         const action = new DeleteActivity(1);
    //         expect({ ...action }).toEqual({ type: ActivitiesActionTypes.DeleteActivity, activityId: 1 });
    //     });
    // });


    describe('FetchActivitiesSuccess', () => {
        it('should create an action', () => {
            const payload: Activity[] = [
                {
                    id: 1,
                    name: 'Activity #1',
                    startDate: '22/06/1999',
                    endDate: '22/06/1999'
                },
                {
                    id: 2,
                    name: 'Activity #2',
                    startDate: '22/06/1999',
                    endDate: '22/06/1999'
                },
            ];
            const action = new FetchActivitiesSuccess(payload);

            expect({ ...action }).toEqual({
                type: ActivitiesActionTypes.FetchActivitiesSuccess,
                payload,
            });
        });
    });

    describe('AddActivitySuccess', () => {
        it('should create an action', () => {
            const payload: Activity = {
                id: 1,
                name: 'Activity #1',
                startDate: '22/06/1999',
                endDate: '22/06/1999'
            };
            const action = new AddActivitySuccess(payload);

            expect({ ...action }).toEqual({
                type: ActivitiesActionTypes.AddActivitySuccess,
                activity: payload,
            });
        });
    });

    describe('EditActivitySuccess', () => {
        it('should create an action', () => {
            const payload: Activity = {
                id: 1,
                name: 'Activity #1',
                startDate: '22/06/1999',
                endDate: '22/06/1999'
            };
            const action = new EditActivitySuccess(payload);

            expect({ ...action }).toEqual({
                type: ActivitiesActionTypes.EditActivitySuccess,
                activity: payload,
            });
        });
    });

    describe('DeleteActivitySuccess', () => {
        it('should create an action', () => {
            const action = new DeleteActivitySuccess(1);
            expect({ ...action }).toEqual({
                type: ActivitiesActionTypes.DeleteActivitySuccess,
                activityId: 1,
            });
        });
    });


});


