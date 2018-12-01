import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-submit-button',
    templateUrl: 'submit-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitButtonComponent {
    @Input() isDisabled: boolean;
}
