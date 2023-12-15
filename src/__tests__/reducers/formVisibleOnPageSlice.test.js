import formVisibleOnPageSliceReducer, { setFormFalse, setFormTrue } from "../../redux/formVisibleOnPageSlice";

describe('formVisibleOnPageSliceReducer', () => {
  it('should handle setFormTrue action', () => {
    const newState = formVisibleOnPageSliceReducer(false, setFormTrue());
    expect(newState).toEqual(true);
  });
  it('should handle setFormFalse action', () => {
    const newState = formVisibleOnPageSliceReducer(false, setFormFalse());
    expect(newState).toEqual(false);
  });
}); 