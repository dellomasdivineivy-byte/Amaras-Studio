export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  inclusions: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'package-a',
    name: 'Package A',
    description: 'Essential photography coverage with edited digital copies.',
    price: 3000,
    duration: '2 Hours',
    inclusions: [
      'Unlimited Shots Photo',
      'Edited Photo',
      'Soft Copy'
    ]
  },
  {
    id: 'package-b',
    name: 'Package B',
    description: 'Standard event package with album and hardcopy prints.',
    price: 6000,
    duration: '4 Hours',
    inclusions: [
      'Unlimited Shots (Photo)',
      '50 Pcs 4R Hardcopy',
      'Album',
      'Studio Pre Photoshoot / Outdoor',
      'During Event (Photo Coverage)',
      'Edited Photo',
      'Soft Copy',
      '1pc 8R'
    ]
  },
  {
    
  
     id: 'package-c',
    name: 'Package C',
    description: 'Premium full photo and video service for grand events.',
    price: 14000,
    duration: '8 Hours',
    inclusions: [
      'Full Photo and Video Coverage',
      'Unlimited Shots',
      '100 Pcs 4R Hardcopy',
      'Album',
      '8R Picture with Frame',
      'Free Family Picture',
      'Studio Pre Photoshoot/Outdoor',
      '4 to 8 Mins Video Highlights',
      'Edited Photo',
      'Soft Copy'
    ]
  }
];
    
  

