import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <img [attr.src]="person.image" />
    <b>{{person.name}}</b>
  `
})
export class PersonComponent {
  @Input() person: any;
}
