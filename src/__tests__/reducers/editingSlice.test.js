import editingSliceReducer, { setEditFalse, setEditTrue } from './../../redux/editingSlice';

describe('editingSliceReducer', () => {
  it('should handle setEditTrue action', () => {
    const newState = editingSliceReducer(false, setEditTrue());
    expect(newState).toEqual(true);
  });
  it('should handle setFormFalse action', () => {
    const newState = editingSliceReducer(false, setEditFalse());
    expect(newState).toEqual(false);
  });
}); 