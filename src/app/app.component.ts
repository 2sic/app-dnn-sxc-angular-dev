import { SxcAngular, SxcAppComponent } from '@2sic.com/dnn-sxc-angular';
import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `this is a test`,
    styleUrls: ['./app.component.css']
})
export class AppComponent extends SxcAppComponent {
    constructor(
        element: ElementRef,
        sxcNg: SxcAngular
    ) {
        super(element, sxcNg);
    }
}