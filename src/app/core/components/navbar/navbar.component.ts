import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    constructor() {}
}
