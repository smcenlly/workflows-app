import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';


const routes: Routes = [
    { path: '', component: ActivitiesListComponent },
    { path: 'add', component: AddActivityComponent },
    { path: ':mealId', component: EditActivityComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
