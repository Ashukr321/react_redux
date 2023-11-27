import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDEL:'idel',
  ERROR:'error',
  LOADING:'loading'
})
const productSlice = createSlice({
  name:"product",
  initialState:{
    data:[],
    status:STATUSES.IDEL,
  },

  reducers:{
    setProduct(state,acton){
      state.data =acton.payload;
    }
  }
})

// we have to export action and reducer 

export const {add,remove} = productSlice.actions;

export default productSlice.reducer;


// in redux to fetch the  api we have to use thunk middleware 
