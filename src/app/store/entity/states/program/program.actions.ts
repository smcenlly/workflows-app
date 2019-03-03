export class ProgramAction {
    public static readonly type = '[Program] Add item';
    constructor(public payload: string) {}
}
