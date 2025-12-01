import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly heroHighlights = [
    { label: 'Bone-In Wings', value: '20 Flavors' },
    { label: 'Fryer Fresh', value: 'Made to Order' },
    { label: 'Game Night', value: 'Family Deals' }
  ];

  readonly menuCategories = [
    {
      title: 'Wings',
      // place the provided 'wings' image at src/assets/image/wings.jpg
      image: 'assets/image/food-photography-chicken-wings.jpg',
    },
    {
      title: 'Fries',
      // place the provided 'fries' image at src/assets/image/fries.jpg
      image: 'assets/image/delicious-fries-studio.jpg',
    },
    {
      title: 'Fish & Chips',
      // place the provided 'fish' image at src/assets/image/fish.jpg
      image: 'assets/image/fish-chips-british-fast-food-with-french-fries-tartar-sauce-rustic-plate-dark-wooden-background-top-v.jpg',
    }
  ];

  readonly dailyDeals = [
    { day: 'Monday', name: '2lb Wings', price: '$22' },
    { day: 'Tuesday', name: 'Specialty Fries', price: '$7.99' },
    { day: 'Wednesday', name: '3lb Wings + Fries', price: '$31' },
    { day: 'Thursday', name: 'Fish & Chips', price: '$16.99' },
    { day: 'Friday', name: 'Wing & Rib Feast', price: '$35' },
    { day: 'Saturday', name: 'Wing & Rib Combo', price: '$32' }
  ];
}
