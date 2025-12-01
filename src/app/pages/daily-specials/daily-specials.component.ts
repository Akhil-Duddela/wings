import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type SpecialCard = {
  title: string;
  subtitle: string;
  price: string;
  highlight?: string;
  note?: string;
};

@Component({
  selector: 'app-daily-specials',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './daily-specials.component.html',
  styleUrls: ['./daily-specials.component.scss']
})
export class DailySpecialsComponent {
  readonly dailySpecials: SpecialCard[] = [
    { title: 'Monday', subtitle: '2lb Wings (1 Flavor)', price: '$22', },
    { title: 'Tuesday', subtitle: 'Specialty Fries', price: '$7.99' },
    { title: 'Wednesday', subtitle: '1lb Wings', price: '$11' },
    { title: 'Thursday', subtitle: '2lb with fries', price: '$25' },
    { title: 'Friday', subtitle: 'Fish & Chips ', price: '$15', note: 'Haddock 2 pcs' },
    { title: 'Saturday', subtitle: 'Wings & Fish', price: '$20', note: '1lb & 1pc Haddock' },
    { title: 'Sunday', subtitle: '5lb (3 Flavors)', price: '$55',  }
  ];

  readonly featureBlocks = [
    {
      title: 'Family Deal',
      combos: ['4lb(2) with Fries & Onion Rings'],
      price: '$50'
    },
    {
      title: 'Game Deal',
      combos: ['2lb(1) with Fries & Onion Rings'],
      price: '$30'
    },
    {
      title: 'Lunch Special (Until 4pm)',
      combos: ['1lb with Fries'],
      price: '$12'
    },
    {
      title: 'Solo Deal',
      combos: ['1lb with Fries & a Pop'],
      price: '$13'
    },
    {
      title: 'Couple Deal',
      combos: ['2lb with Fries & 3 Pop'],
      price: '$25'
    }
  ];
}
