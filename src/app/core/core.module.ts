import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthInterceptor } from './http-interceptors/authentication-interceptor';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
