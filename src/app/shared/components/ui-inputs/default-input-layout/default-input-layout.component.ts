import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-default-input-layout',
    templateUrl: 'default-input-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['default-input-layout.component.scss']
})
export class DefaultInputLayoutComponent {
    @Input() errorMessage: string;
    @Input() isDisplayingErrorMessage: Boolean;
    @Input() label: string;
}
