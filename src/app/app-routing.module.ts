import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
    { path: 'programs', loadChildren: './programs/programs.module#ProgramsModule', },
    { path: 'programs/:programId/activities', loadChildren: './activities/activities.module#ActivitiesModule', },
    { path: '', redirectTo: 'programs', pathMatch: 'full' },
    { path: '**', redirectTo: 'programs' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

