
import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
  name: "UpdatedList",
  initialState: {
    list: [],
  },
  reducers: {
    getUpdatedList: (state, action) => {
      state.list = action.payload;
      // state.list.push(...action.payload);
    },
  },
});

export const {getUpdatedList} =updateSlice.actions;


export default updateSlice.reducer
