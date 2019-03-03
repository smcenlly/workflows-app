export class FetchData {
    static readonly type = '[Shared] [API] Fetch Data';
}

export class ChangeProgramPage {
    static readonly type = '[Shared] [UI] [Programs] Change page';
    constructor(public pageNumber: number) {}
}
export class ChangeActivitiesPage {
    static readonly type = '[Shared] [UI] [Activities] Change page';
    constructor(public programId: number, public pageNumber: number) {}
}
