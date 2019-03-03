import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultInputLayoutComponent } from './default-input-layout/default-input-layout.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

@NgModule({
    imports: [CommonModule],
    exports: [SubmitButtonComponent, DefaultInputLayoutComponent],
    declarations: [SubmitButtonComponent, DefaultInputLayoutComponent],
})
export class AppInputsModule {}
