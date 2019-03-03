import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    declarations: [ActivitiesListComponent, AddActivityComponent, EditActivityComponent, ActivitiesListComponent, ActivityFormComponent],
    imports: [
        BsDatepickerModule.forRoot(),
        SharedModule,
        CommonModule,
        ActivitiesRoutingModule,
        HttpClientModule,
        CommonModule,
    ],
})
export class ActivitiesModule {}
