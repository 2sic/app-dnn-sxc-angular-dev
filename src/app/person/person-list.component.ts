import { Component, ElementRef, OnInit } from '@angular/core';
import { Context, Data, DnnAppComponent } from '@2sic.com/dnn-sxc-angular';

@Component({
    selector: 'person-list',
    template: `List of all persons:<br> <person *ngFor="let person of persons" [person]="person"></person>`
})
export class PersonListComponent implements OnInit {
    persons: Person[];

    constructor(
        private data: Data,
    ) {
    }

    ngOnInit() {
        this.data.content<Person>('person').get()
            .subscribe(persons => this.persons = persons);
    }
}

class Person {
    name: string;
}
