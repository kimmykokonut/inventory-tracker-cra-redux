import restockSliceReducer, { setRestockFalse, setRestockTrue } from "../../redux/restockSlice";

describe('restockSliceReducer', () => {
  it('should handle setRestockTrue action', () => {
    const newState = restockSliceReducer(false, setRestockTrue());
    expect(newState).toEqual(true);
  });
  it('should handle setRestockFalse action', () => {
    const newState = restockSliceReducer(false, setRestockFalse());
    expect(newState).toEqual(false);
  });
}); 