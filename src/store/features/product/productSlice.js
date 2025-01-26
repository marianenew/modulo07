import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialValue: 10,
    products: [
      { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
      { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
      { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
      { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
      { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
      { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" },
    ],
    filterText: '',
    inStock: false,
  };
  

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setInitialValue: (state, payload) => {
            state.initialValue = payload
        },
        setFilter: (state, action) => {
            state.filterText = action.payload;
          },
      
          setInStock: (state) => {
            state.inStock = !state.inStock;
         },
    },
});

export const { setFilter, setInStock,setInitialValue } = productSlice.actions
export default productSlice.reducer;