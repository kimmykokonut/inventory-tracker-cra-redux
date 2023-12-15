import menuListSelectorReducer, { sellPint, createFlavor, editFlavor } from "../../redux/menuListSlice";

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
  it('should handle createFlavor action', () => {
    const newFlavor = {
      name: 'Mint Chip',
      description: 'Mint ice cream with chocolate chunks',
      imgSrc: 'mintchip',
      alt: 'Mint chip flavor ice cream',
      available: 'seasonal',
      price: '5.00',
      allergens: 'dairy',
      qtyInStock: 130,
      id: '2'
    }
    const newMenuList = menuListSelectorReducer(initialState, createFlavor(newFlavor));
    expect(newMenuList).toEqual([
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
      },
      {
        name: 'Mint Chip',
        description: 'Mint ice cream with chocolate chunks',
        imgSrc: 'mintchip',
        alt: 'Mint chip flavor ice cream',
        available: 'seasonal',
        price: '5.00',
        allergens: 'dairy',
        qtyInStock: 130,
        id: '2'
      }])
  })
  it('should hanlde editFlavor action', () => {
    const edit = {
      name: 'Chocolate Chip',
      description: 'Vanilla ice cream with chocolate chunks',
      imgSrc: 'mintchip',
      alt: 'Mint chip flavor ice cream',
      available: 'seasonal',
      price: '5.00',
      allergens: 'dairy',
      qtyInStock: 130,
      id: '2'
    }
    const newMenuList = menuListSelectorReducer(initialState, editFlavor(edit));
    expect(newMenuList).toEqual([
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
      },
      {
        name: 'Chocolate Chip',
        description: 'Vanilla ice cream with chocolate chunks',
        imgSrc: 'mintchip',
        alt: 'Mint chip flavor ice cream',
        available: 'seasonal',
        price: '5.00',
        allergens: 'dairy',
        qtyInStock: 130,
        id: '2'
      }])
  })
}); 