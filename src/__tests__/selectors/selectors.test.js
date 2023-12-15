import { formVisibleOnPageSelector } from './../../redux/formVisibleOnPageSlice';
import { selectedFlavorSelector } from './../../redux/selectedFlavorSlice';
import { editingSelector } from './../../redux/editingSlice';
import { restockSelector } from '../../redux/restockSlice';
import flavorArray from '../../flavorList';
import { menuListSelector } from '../../redux/menuListSlice';

describe("selectors test", () => {
  const state = {
    formVisibleOnPage: false,
    menuList: flavorArray,
    selectedFlavor: null,
    editing: false,
    restock: false,
  };
  test("should show state is selected correctly for  formVisibleOnPageSelector", () => {
    const selectedAnswer = formVisibleOnPageSelector(state);
    expect(selectedAnswer).toEqual(false);
  });
  test('should show state is selected correctly for menuListSelector', () => {
    const selectedAnswer = menuListSelector(state);
    expect(selectedAnswer).toEqual(flavorArray);
  })
  test("should show state is selected correctly for  selectedFlavorSelector", () => {
    const selectedAnswer = selectedFlavorSelector(state);
    expect(selectedAnswer).toEqual(null);
  });
  test("should show state is selected correctly for  editingSelector", () => {
    const selectedAnswer = editingSelector(state);
    expect(selectedAnswer).toEqual(false);
  });
  test("should show state is selected correctly for  restockSelector", () => {
    const selectedAnswer = restockSelector(state);
    expect(selectedAnswer).toEqual(false);
  });
});