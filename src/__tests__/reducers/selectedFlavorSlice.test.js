import selectedFlavorReducer, { setFlavor, clearSelectedFlavor } from './../../redux/selectedFlavorSlice';

describe('selectedFlavorReducer', () => {
  const initialState = null;
  const flavor = { id: '1', name: 'Reeses' };
  it('should handle setFlavor action', () => {
    const newState = selectedFlavorReducer(initialState, setFlavor(flavor));
    expect(newState).toEqual(flavor);
  });
  it('should handle clearSelectedFlavor action', () => {
    const newState = selectedFlavorReducer(flavor, clearSelectedFlavor());
    expect(newState).toEqual(null);
  });
}); 