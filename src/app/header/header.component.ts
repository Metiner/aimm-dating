import { Component } from '@angular/core';
import { hamburgerMenuExpandAnimationTrigger } from '../animations';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [hamburgerMenuExpandAnimationTrigger]
})
export class HeaderComponent {

    public show = false;

    constructor() {
    }

    onHamburgerMenuIcon(): void {

    }
}
