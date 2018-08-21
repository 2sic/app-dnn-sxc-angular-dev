import { Component, ElementRef, OnInit } from '@angular/core';
import { Context, Data, DnnAppComponent } from '@2sic.com/dnn-sxc-angular';

@Component({
    selector: 'app-root',
    template: `<person-list></person-list>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent extends DnnAppComponent {

    constructor(
        el: ElementRef, // needed for super() constructor call; ensures that dnn-sxc-angular can pick up module-id etc.
        context: Context, // needed for super() constructor call; ensures that dnn-sxc-angular can pick up module-id etc.
    ) {
        super(el, context);
    }

}
