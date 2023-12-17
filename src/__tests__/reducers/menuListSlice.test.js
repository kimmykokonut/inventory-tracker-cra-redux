import menuListSelectorReducer, { sellPint, createFlavor, editFlavor, setRestock } from "../../redux/menuListSlice";

describe('menuListSelectorReducer', () => {
  const initialState = {
    '1': {
      name: 'Reese\'s Nightmare',
      description: 'A chocolate base with peanut butter ribbons and pieces of Reeses cups',
      imgSrc: 'reeses',
      alt: 'Chocolate reeses flavor ice cream',
      available: 'classic',
      price: '4.00',
      allergens: 'peanuts',
      qtyInStock: 130,
      id: '1'
    }
  }
  it('should handle sellPint action', () => {
    const newState = menuListSelectorReducer(initialState, sellPint('1'));
    expect(newState).toEqual({
      '1': {
        name: 'Reese\'s Nightmare',
        description: 'A chocolate base with peanut butter ribbons and pieces of Reeses cups',
        imgSrc: 'reeses',
        alt: 'Chocolate reeses flavor ice cream',
        available: 'classic',
        price: '4.00',
        allergens: 'peanuts',
        qtyInStock: 129,
        id: '1'
      }
    });
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
    expect(newMenuList).toEqual({
      '1': {
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
      '2': {
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
    })
  })
  it('should handle editFlavor action', () => {
    const edit = {
        name: 'Chocolate Chip',
        description: 'Vanilla ice cream with chocolate chunks',
        imgSrc: 'mintchip',
        alt: 'Mint chip flavor ice cream',
        available: 'seasonal',
        price: '5.00',
        allergens: 'dairy',
        qtyInStock: 130,
        id: '1'
      }
    const newMenuList = menuListSelectorReducer(initialState, editFlavor(edit));
    expect(newMenuList).toEqual({
      '1': {
        name: 'Chocolate Chip',
        description: 'Vanilla ice cream with chocolate chunks',
        imgSrc: 'mintchip',
        alt: 'Mint chip flavor ice cream',
        available: 'seasonal',
        price: '5.00',
        allergens: 'dairy',
        qtyInStock: 130,
        id: '1'
      }
    })
  })
it('should handle setRestock action', () => {
  const newState = menuListSelectorReducer(initialState, setRestock({ id: '1', restockQty: 130 }));
  expect(newState).toEqual({
    '1':{
    name: 'Reese\'s Nightmare',
    description: 'A chocolate base with peanut butter ribbons and pieces of Reeses cups',
    imgSrc: 'reeses',
    alt: 'Chocolate reeses flavor ice cream',
    available: 'classic',
    price: '4.00',
    allergens: 'peanuts',
    qtyInStock: 260,
    id: '1'
  }});
});
}); 