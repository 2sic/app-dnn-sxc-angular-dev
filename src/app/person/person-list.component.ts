import { Component, OnInit } from '@angular/core';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'person-list',
    template: `List of all persons:<br> <person *ngFor="let person of persons" [person]="person"></person>`
})
export class PersonListComponent implements OnInit {
    persons: Person[];

    constructor(
        private data: Data,
        private http: HttpClient
    ) {
      console.log('debug http', http);
    }

    ngOnInit() {
        this.data.content<Person>('person').get()
            .subscribe(persons => this.persons = persons);

        this.http.get("app/xyz").toPromise();
    }
}

class Person {
    Name: string;
}
