import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  template: `
    <img [attr.src]="person.image" />
    <b>{{person.name}}</b><br>
  `
})
export class PersonComponent {
  @Input() person: any;
}
