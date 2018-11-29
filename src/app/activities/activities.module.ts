import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ActivitiesEffects } from './activities.effects';
import { HttpClientModule } from '@angular/common/http';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ActivitiesListComponent, AddActivityComponent, ActivitiesListComponent, ActivityFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    ActivitiesRoutingModule,
    HttpClientModule,
    CommonModule,
    EffectsModule.forFeature([ActivitiesEffects])
  ],
})
export class ActivitiesModule { }
