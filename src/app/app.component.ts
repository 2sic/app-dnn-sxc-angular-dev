import { ContentResourceFactory, SxcAngular, SxcAppComponent } from '@2sic.com/dnn-sxc-angular';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<app-person *ngFor="let person of persons" [person]="person"></app-person>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent extends SxcAppComponent implements OnInit  {
    persons: Person[];

    constructor(
        el: ElementRef,
        sxcNg: SxcAngular,
        private crf: ContentResourceFactory
    ) {
        super(el, sxcNg);
    }
    
    ngOnInit() {
        this.crf.resource<Person[]>('person').get()
            .subscribe(persons => this.persons = persons);
    }
}

class Person {
    name: string;
}