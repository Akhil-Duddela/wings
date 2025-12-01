import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type MenuItem = {
  name: string;
  price?: string; // <-- make price optional
  detail?: string;
};

type MenuBlock = {
  title: string;
  sections: {
    subtitle?: string;
    items: MenuItem[];
  }[];
};

type FlavorSection = {
  title: string;
  groups: {
    subtitle?: string;
    items: string[];
  }[];
};

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
    readonly flavorSections: FlavorSection[] = [
    {
      title: 'Dust to Crust',
      groups: [
        {
          items: [
            'Lemon Pepper',
            'Smoked Paprika',
            'Cajun Spice',
            'Salt & Pepper',
            'Tandoori Dry Rub',
            'Souvlaki',
            'Garlic Herb',
            'Roasted Garlic',
            'Colombo Curry Masala',
            'Taco Seasoning',
            'Parmesan Garlic',
            'Ancho Chipotle',
            'Black Pepper Heat',
            'Cracked Pepper',
            '7 Chili Lime Salt',
            'Curry Tandoori',
            'Dill Ranch',
            'Bare Bones'
          ]
        }
      ]
    },
    {
      title: 'Saucy',
      groups: [
        {
          subtitle: 'Most Common',
          items: ['Honey Garlic', 'Forty Creek', 'Ranch', 'Thai Chili Lime', 'Lemon Dill', 'Honey Mustard', 'Buffalo Ranch']
        },
        {
          subtitle: 'Heat',
          items: ['Buffalo Hot', 'Hot', 'Suicide', 'Caribbean Jerk', 'Island Inferno', 'Habanero Heat']
        },
        {
          subtitle: 'Sweet Spicy',
          items: ['Pineapple Curry', 'Honey Stinger', 'Sweet Heat Lime', 'Sweety Suicide', 'Sweet Honey Chipotle', 'Souvlaki Honey Garlic', 'Thai Sweet Chili']
        },
        {
          subtitle: 'Fusion',
          items: ['Chipotle Ranch', 'Sweet & Sour', 'Italian Wedding', 'Thai Ranch', 'Desi Fire', 'Red Thai Sauce', 'Butter Chicken', 'Sticky Pineapple', 'Cajun Honey', 'The Drunken Rooster', 'Szechwan', 'Chipotle Lime', 'Garlic Parm Ranch', 'Taco Ranch Slam']
        }
      ]
    },
    {
      title: "BBQ and It's Fusion",
      groups: [
        {
          items: [
            'BBQ',
            'Texas Smoky BBQ',
            'Buffalo Honey BBQ',
            'Forty Creek BBQ',
            'Maple BBQ',
            'Smoky BBQ',
            'Spicy BBQ',
            'Tandoori BBQ',
            'Hickory BBQ',
            'Ancho BBQ',
            'Maple Chipotle',
            'Smokin Jerk BBQ'
          ]
        }
      ]
    }
  ];

  // holds the key of the currently-expanded item for mobile (format: "b-s-i")
  expandedKey?: string;

  // tracks which subsections are expanded (format: "b-s") so each subsection can toggle
  private expandedSections = new Set<string>();

  toggleSection(b: number, s: number): void {
    const key = `${b}-${s}`;
    if (this.expandedSections.has(key)) {
      this.expandedSections.delete(key);
    } else {
      this.expandedSections.add(key);
    }
  }

  isSectionExpanded(b: number, s: number): boolean {
    return this.expandedSections.has(`${b}-${s}`);
  }

  toggleDetail(b: number, s: number, i: number): void {
    const key = `${b}-${s}-${i}`;
    this.expandedKey = this.expandedKey === key ? undefined : key;
  }

  isExpanded(b: number, s: number, i: number): boolean {
    return this.expandedKey === `${b}-${s}-${i}`;
  }
  readonly menuBlocks: MenuBlock[] = [
    {
      title: 'Wing Combos & Pricing',
      sections: [
        {
          subtitle: 'Bone-In Wings',
          items: [
            { name: '1lb (1 Flavour)', price: '$13.99'  },
            { name: '2lb (2 Flavours)', price: '$26.99' },
            { name: '3lb (3 Flavours)', price: '$39.99' },
            { name: '5lb (4 Flavours)', price: '$64.99' }
          ]
        },
        {
          subtitle: 'With Fries',
          items: [
            { name: '1lb (1 Flavour)', price: '$16.99'  },
            { name: '2lb (2 Flavours)', price: '$29.99' },
            { name: '3lb (3 Flavours)', price: '$42.99' },
            { name: '5lb (4 Flavours)', price: '$67.99' },
            { name: 'Veg & Dip', price: '$2.99'         }
          ]
        },
        {
          subtitle: 'Boneless Wings',
          items: [
            { name: '1lb (1 Flavour)', price: '$14.99'  },
            { name: '2lb (2 Flavours)', price: '$28.99' },
            { name: '3lb (3 Flavours)', price: '$41.99' },
            { name: '5lb (4 Flavours)', price: '$66.99' }
          ]
        },
        {
          subtitle: 'With Fries',
          items: [
            { name: '1lb (1 Flavour)', price: '$16.99'  },
            { name: '2lb (2 Flavours)', price: '$29.99' },
            { name: '3lb (3 Flavours)', price: '$42.99' },
            { name: '5lb (4 Flavours)', price: '$67.99' },
            { name: 'Veg & Dip', price: '$2.99'         }
          ]
        }
      ]
    },
    {
      title: 'Fries & Things',
      sections: [
        {
          items: [
            { name: 'Large Fries', price: '$8.99' },
            { name: 'Small Fries', price: '$4.99' },
            { name: 'Sweet Fries', price: '$8.99' },
            { name: 'Onion Rings', price: '$8.99' },
            { name: 'Lord of the Rings', price: '$10.99', detail: 'Onion rings, onions, cheese, ranch drizzle' },
            { name: 'Jaffna Fries', price: '$10.99', detail: 'Red Onion,Chilli powder,Cheese,Ranch' },
            { name: 'Cajun Fries', price: '$10.99', detail: 'Cajun Blend' },
          { name: 'Garlic Parmesan Truffle Fries', price: '$10.99',     detail: ' Truffle Oil,Shredded Parmesan,Roasted Garlic' },
            { name: 'Chipotle Lime Fries', price: '$10.99', detail: 'Mexican Spice,Chip Aiole,Diced Onion,Mix Cheese' },
            { name: 'Italian Fries', price: '$10.99', detail: 'Golden Fries,Italian Herbs(Basil,Rosemary,Parsley)' }
          ]
        }
      ]
    },
    {
      title: 'Fish & Chips',
      sections: [
        {
          items: [
            { name: 'Haddock & Chips (1 lb)', price: '$14.99', detail: '1 Pc' },
            { name: 'Haddock & Chips (3 lb)', price: '$19.99',detail: '2 Pc' },
            { name: 'Halibut & Chips (1 lb)', price: '$19.99',detail: '1 Pc' },
  
            { name: 'Halibut & Chips (3 lb)', price: '$26.99', detail: '2 Pc' }
          ]
        }
      ],
    },

     {
      title: 'Dust to Crust',
      sections: [
        {
          items: [
            { name: 'Lemon Pepper' },
            { name: 'Smoked Paprika' },
            { name: 'Cajun Spice' },
            { name: 'Salt & Pepper' },
            { name: 'Tandoori Dry Rub' },
            { name: 'Souvlaki' },
            { name: 'Garlic Herb' },
            { name: 'Roasted Garlic' },
            { name: 'Colombo Curry Masala' },
            { name: 'Taco Seasoning' },
            { name: 'Parmesan Garlic' },
            { name: 'Ancho Chipotle' },
            { name: 'Black Pepper Heat' },
            { name: 'Cracked Pepper' },
            { name: '7 Chili Lime Salt' },
            { name: 'Curry Tandoori' },
            { name: 'Dill Ranch' },
            { name: 'Bare Bones' }
          ]
        }
      ]
    },

    // Saucy (converted to MenuBlock)
    {
      title: 'Saucy',
      sections: [
        {
          subtitle: 'Most Common',
          items: [
            { name: 'Honey Garlic' },
            { name: 'Forty Creek' },
            { name: 'Ranch' },
            { name: 'Thai Chili Lime' },
            { name: 'Lemon Dill' },
            { name: 'Honey Mustard' },
            { name: 'Buffalo Ranch' }
          ]
        },
        {
          subtitle: 'Heat',
          items: [
            { name: 'Buffalo Hot' },
            { name: 'Hot' },
            { name: 'Suicide' },
            { name: 'Caribbean Jerk' },
            { name: 'Island Inferno' },
            { name: 'Habanero Heat' }
          ]
        },
        {
          subtitle: 'Sweet Spicy',
          items: [
            { name: 'Pineapple Curry' },
            { name: 'Honey Stinger' },
            { name: 'Sweet Heat Lime' },
            { name: 'Sweety Suicide' },
            { name: 'Sweet Honey Chipotle' },
            { name: 'Souvlaki Honey Garlic' },
            { name: 'Thai Sweet Chili' }
          ]
        },
        {
          subtitle: 'Fusion',
          items: [
            { name: 'Chipotle Ranch' },
            { name: 'Sweet & Sour' },
            { name: 'Italian Wedding' },
            { name: 'Thai Ranch' },
            { name: 'Desi Fire' },
            { name: 'Red Thai Sauce' },
            { name: 'Butter Chicken' },
            { name: 'Sticky Pineapple' },
            { name: 'Cajun Honey' },
            { name: 'The Drunken Rooster' },
            { name: 'Szechwan' },
            { name: 'Chipotle Lime' },
            { name: 'Garlic Parm Ranch' },
            { name: 'Taco Ranch Slam' }
          ]
        }
      ]
    },

    // BBQ and Its Fusion (converted to MenuBlock)
    {
      title: "BBQ and It's Fusion",
      sections: [
        {
          items: [
            { name: 'BBQ' },
            { name: 'Texas Smoky BBQ' },
            { name: 'Buffalo Honey BBQ' },
            { name: 'Forty Creek BBQ' },
            { name: 'Maple BBQ' },
            { name: 'Smoky BBQ' },
            { name: 'Spicy BBQ' },
            { name: 'Tandoori BBQ' },
            { name: 'Hickory BBQ' },
            { name: 'Ancho BBQ' },
            { name: 'Maple Chipotle' },
            { name: 'Smokin Jerk BBQ' }
          ]
        }
      ]
    },

    {
      title: 'Beverages',
      sections: [
        {
          items: [
            { name: 'Pop', price: '$2.50', detail: 'Coke,Diet Coke,Ginger Ale,Sprite,Iced Tea' },
            { name: 'Water', price: '$2.00' }
          ]
        }
      ]
    }
  ];


}
