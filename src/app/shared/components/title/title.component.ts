import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['title.component.scss'],
})
export class TitleComponent {}
