import reeses from './assets/reeses.jpg';
import oreo from "./assets/oreo.jpeg";
import sorbet from "./assets/sorbet.jpeg";

const flavorArray = {
  1: {
    name: 'Reese\'s Nightmare',
    description: 'A chocolate base with peanut butter ribbons and pieces of Reeses cups',
    imgSrc: reeses,
    alt: 'Chocolate reeses flavor ice cream',
    available: 'classic',
    price: '4.00',
    allergens: 'peanuts',
    qtyInStock: 130,
    id: '1'
  },
  2: {
    name: 'Coffee Oreo',
    description: 'A coffee  base with pieces of Oreo cookies',
    imgSrc: oreo,
    alt: 'Coffee ice cream with oreos in a cone',
    available: 'seasonal',
    price: '3.00',
    allergens: 'wheat',
    qtyInStock: 130,
    id: '2',
  },
  3: {
    name: 'Raspberry Sorbet',
    description: 'Dairy-free, fresh raspberries will remind you of summer',
    imgSrc: sorbet,
    alt: 'Raspberry sorbet in a cup with a mint leaf',
    available: 'classic',
    price: '2.00',
    allergens: 'none',
    qtyInStock: 130,
    id: '3'
  },
};
export default flavorArray;