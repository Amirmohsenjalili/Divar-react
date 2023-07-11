import { createSlice } from "@reduxjs/toolkit";
import { AsaideCategory } from "../components/__mock__/AsaideCategory";
import NavCategory from "../components/__mock__/NavCategory";
import products from "../components/__mock__/Products";

const initialState = {
    dataCategory: [NavCategory],
    dataAside: [AsaideCategory],
    dataProduct: [products],
    // loading: false,
    // error: ""
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        // request: () => {
        //     // loading = true
        //     dataCategory= [],
        //     dataAside= [],
        //     dataProduct= [],
        //     // error = ""
        // }
        success: (state) => {
            // loading = false
            state.dataCategory = NavCategory
            state.dataAside = AsaideCategory
            state.dataProduct = products
            // error = ""
        }
        // failure: (state) => {
            //     // loading = false
            //     state = initialState
            //     // error = "Error"
            // }
        }
    })
    
    console.log(NavCategory);
    export const { request, success, failure } = dataSlice.actions
export default dataSlice.reducer