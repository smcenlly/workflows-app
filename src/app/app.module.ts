import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ProgramsModule } from './programs/programs.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ActivityState } from './store/entity/states/activity/activity.state';
import { ProgramState } from './store/entity/states/program/program.state';
import { SharedState } from './store/shared/shared.state';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        SharedModule,
        BrowserModule,
        CoreModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([ProgramState, ActivityState, SharedState], { developmentMode: !environment.production }),
        !environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : [],
        ProgramsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
