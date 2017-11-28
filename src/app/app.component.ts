import { Component, ElementRef, OnInit } from '@angular/core';
import { Context, Data, DnnAppComponent } from '@2sic.com/dnn-sxc-angular';
import { SxcTestInterface } from '@2sic.com/2sxc-typings';

@Component({
    selector: 'app-root',
    template: `WITH TYPINGS!: <app-person *ngFor="let person of persons" [person]="person"></app-person>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent extends DnnAppComponent implements OnInit {
    persons: Person[];

    constructor(
        el: ElementRef,
        context: Context,
        private data: Data,
    ) {
        super(el, context);
        const a: SxcTestInterface = {
          name: 'lorem'
        };
    }

    ngOnInit() {
        this.data.content<Person>('person').get()
            .subscribe(persons => this.persons = persons);
    }
}

class Person {
    name: string;
}
