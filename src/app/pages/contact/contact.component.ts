import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly contacts = [
    { label: 'Phone', value: '+1 905 278 8898', href: 'tel:+1905278998' },
    { label: 'Email', value: 'order@wingshouse.com', href: 'mailto:order@wingshouse.com' },
    { label: 'Location', value: '20497 Leslie St Queensville, Ontario, Canada, Postal Code L0G 1R0' }
  ];
}
