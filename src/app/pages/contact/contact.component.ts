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
    { label: 'Phone', value: '+1 202 555 789', href: 'tel:+1202555789' },
    { label: 'Email', value: 'order@wingshouse.com', href: 'mailto:order@wingshouse.com' },
    { label: 'Location', value: '130 Downtown Street, Boston, MA 02116' }
  ];
}
