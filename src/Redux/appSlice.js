import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    inputs : {
        numbers : '',
        price : '',
        days : ''
    }, 
    totalSaved : null
}

const appSlice = createSlice({
    name : "AshToCash",
    initialState,
    reducers : {

        updateInputs : (state, action) => {
            state.inputs = {...state.inputs, ...action.payload}
        },
        emptyInputs : (state, action) => {
            state.inputs = {
                numbers : '',
                price : '', 
                days : ''
            }
        },
        calculatedPrice : (state, action) => {
            state.totalSaved = state.inputs.numbers * state.inputs.price * state.inputs.days
        }

    }
})

export const {updateInputs, emptyInputs, calculatedPrice} = appSlice.actions
export default appSlice.reducer