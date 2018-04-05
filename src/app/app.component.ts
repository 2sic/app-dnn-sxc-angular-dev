import { Component, ElementRef, OnInit } from '@angular/core';
import { Context, Data, DnnAppComponent } from '@2sic.com/dnn-sxc-angular';

@Component({
    selector: 'app-root',
    template: `List of all persons: <app-person *ngFor="let person of persons" [person]="person"></app-person>`,
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
    }

    ngOnInit() {
        this.data.content<Person>('person').get()
            .subscribe(persons => this.persons = persons);
    }
}

class Person {
    name: string;
}
