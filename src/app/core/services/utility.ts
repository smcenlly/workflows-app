import { apiBaseUrl } from 'src/app/config/constants';
import { Activity } from '../../activities/models/activity';

export const addWorkflowLevel1Prop = (activity: Activity, programId: number): Activity => ({
    ...activity,
    workflowlevel1: `${apiBaseUrl}/workflowlevel1/${programId}/`,
});

export const addProgramIdProp = (activity: Activity): Activity => ({
    ...activity,
    programId: parseInt(activity.workflowlevel1.split('/')[5], 10),
});

export const tenBasedOnPageNumber = (pageNumber: number, arr: any[]) => {
    const firstIndex = (pageNumber - 1) * 10;
    return arr.slice(firstIndex, firstIndex + 10);
};
