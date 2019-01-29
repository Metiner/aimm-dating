import { Component, OnInit } from '@angular/core';
import * as lottie from "lottie-web/build/player/lottie.js";
@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        lottie.loadAnimation({
            container: document.getElementById('joinHearthsAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/lottie-animations/joinHearths.json'
        });
    }

}
