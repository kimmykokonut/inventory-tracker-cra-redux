import menuListSelectorReducer, { sellPint } from "../../redux/menuListSlice";

describe('menuListSelectorReducer', () => {
  const initialState = [
    {
      name: 'Reese\'s Nightmare',
      description: 'A chocolate base with peanut butter ribbons and pieces of Reeses cups',
      imgSrc: 'reeses',
      alt: 'Chocolate reeses flavor ice cream',
      available: 'classic',
      price: '4.00',
      allergens: 'peanuts',
      qtyInStock: 130,
      id: '1'
    }]
  it('should handle sellPint action', () => {
    const newState = menuListSelectorReducer(initialState, sellPint({ id: '1' }));
    expect(newState).toEqual([{
      name: 'Reese\'s Nightmare',
      description: 'A chocolate base with peanut butter ribbons and pieces of Reeses cups',
      imgSrc: 'reeses',
      alt: 'Chocolate reeses flavor ice cream',
      available: 'classic',
      price: '4.00',
      allergens: 'peanuts',
      qtyInStock: 129,
      id: '1'
    }]);
  });
}); 