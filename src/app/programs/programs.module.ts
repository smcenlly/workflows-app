import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramComponent } from './program/program.component';
import { EffectsModule } from '@ngrx/effects';
import { ProgramsEffects } from './programs.effects';
import { HttpClientModule } from '@angular/common/http';
import { ProgramsRoutingModule } from './programs-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProgramsListComponent, ProgramComponent],
  imports: [
    SharedModule,
    CommonModule,
    ProgramsRoutingModule,
    HttpClientModule,
    CommonModule,
    EffectsModule.forFeature([ProgramsEffects])
  ],
  exports: [ProgramsListComponent, ProgramComponent],
})
export class ProgramsModule { }
