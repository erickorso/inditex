import { createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
  label: string
}

const initialState: InitialStateType = {
  label: ''
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.label = action.payload
    },
  },
});

export const {
  setSearchValue,
} = SearchSlice.actions

export const setSearchAction = async (dispatch: Function, label: string) => {
  setTimeout(async () => {
      dispatch(setSearchValue(label));
  }, 200)
};

export default SearchSlice.reducer;
