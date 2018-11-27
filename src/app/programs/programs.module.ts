import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
  declarations: [ProgramsListComponent, ProgramComponent],
  imports: [
    CommonModule
  ]
})
export class ProgramsModule { }
