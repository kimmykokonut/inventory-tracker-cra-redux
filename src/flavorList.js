import reeses from './assets/reeses.jpg';
import oreo from "./assets/oreo.jpeg";
import sorbet from "./assets/lemon.jpeg";
import grape from "./assets/grape.jpeg";
import spumono from "./assets/spumono.jpeg";
import blackRasp from "./assets/black-raspberry.jpeg";

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
    name: 'Lemon Sorbet',
    description: 'Dairy-free, will remind you of summer',
    imgSrc: sorbet,
    alt: 'Lemon sorbet',
    available: 'classic',
    price: '2.00',
    allergens: 'none',
    qtyInStock: 130,
    id: '3'
  },
  4: {
    name: 'Grape Nuts',
    description: 'If you you are from New England, you know what this is',
    imgSrc: grape,
    alt: 'Grape nuts cereal without the filling breaking crunch',
    available: 'classic',
    price: '1.00',
    allergens: 'wheat',
    qtyInStock: 130,
    id: '4'
  },
  5: {
    name: 'Spumoni',
    description: 'The original Neopolitan ice cream',
    imgSrc: spumono,
    alt: 'Cherry, pistachio and chocolate ice cream',
    available: 'seasonal',
    price: '6.00',
    allergens: 'nuts',
    qtyInStock: 130,
    id: '5'
  },
  6: {
    name: 'Black Raspberry',
    description: 'Late summer heart-melter',
    imgSrc: blackRasp,
    alt: 'Creamy black raspberry ice cream',
    available: 'seasonal',
    price: '4.00',
    allergens: 'none',
    qtyInStock: 130,
    id: '6'
  },
};
export default flavorArray;