import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
    { path: 'activities', loadChildren: './activities/activities.module#ActivitiesModule', },
    { path: 'programs', loadChildren: './programs/programs.module#ProgramsModule', },
    { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
    { path: '**', redirectTo: 'my-profile' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

