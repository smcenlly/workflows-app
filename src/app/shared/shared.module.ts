import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgProgressModule } from '@ngx-progressbar/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppInputsModule } from './components/ui-inputs/inputs.module';
import { TitleComponent } from './components/title/title.component';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MatSnackBarModule,
        NgProgressModule,
        AppInputsModule,
        PaginationModule.forRoot(),
        NgProgressModule.forRoot(),
        NgProgressHttpModule.forRoot(),
    ],
    providers: [],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgProgressModule,
        AppInputsModule,
        PaginationModule,
        TitleComponent,
        MatSnackBarModule
    ],
    declarations: [TitleComponent],
})
export class SharedModule {}
