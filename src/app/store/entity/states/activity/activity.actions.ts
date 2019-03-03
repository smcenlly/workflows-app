import { Activity } from 'src/app/activities/models/Activity';

export class DeleteActivity {
    static readonly type = '[Activity] Delete Activity';
    constructor(public activityId: number) {}
}
export class AddActivity {
    static readonly type = '[Activity] Add Activity';
    constructor(public activity: Activity, public programId: number) {}
}
export class EditActivity {
    static readonly type = '[Activity] Edit Activity';
    constructor(public activityId: number, public activity: Activity, public programId: number) {}
}
