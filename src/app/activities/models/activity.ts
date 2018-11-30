export interface Activity {
    id: number;
    name: string;
    expected_start_date: string;
    expected_end_date: string;
    workflowlevel1?: string;
    programId?: number;
}
