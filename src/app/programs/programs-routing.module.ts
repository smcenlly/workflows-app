import { ProgramsListComponent } from './programs-list/programs-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProgramsListComponent },
    { path: ':programId/activities', loadChildren: '../activities/activities.module#ActivitiesModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProgramsRoutingModule { }
