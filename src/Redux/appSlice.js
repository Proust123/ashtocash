import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";



const initialState = {
    inputs : {
        numbers : '',
        price : '',
        days : '',
        numberUnit : 'cigarette',
        priceUnit : 'cigarette',
        timeUnit : 'days'
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
            }, 
            state.totalSaved = null
        },
        // calculatedPrice : (state, action) => {
        //     state.totalSaved = state.inputs.numbers * state.inputs.price * state.inputs.days
        // }
        calculatedPrice: (state) => {
            let cigarettesPerPack = 20

            let dailyCount = Number(state.inputs.numbers)
            let unitPrice = Number(state.inputs.price)
            let time = Number(state.inputs.days)

            if(state.inputs.numberUnit === 'pack') {
                dailyCount *= cigarettesPerPack
            }

            if(state.inputs.priceUnit === 'pack') {
                unitPrice /= cigarettesPerPack
            }

            switch (state.inputs.timeUnit) {
                case 'weeks':
                    time *= 7
                    break;
                case 'months':
                    time *= 30
                    break;
                case 'years':
                    time *= 365
                    break;
            
            }

            if(!dailyCount || !unitPrice || !time) {
                toast.error('Please fill all fields first')
                return 
            }
            
            if (!isNaN(dailyCount) && !isNaN(unitPrice) && !isNaN(time)) {
                state.totalSaved = (dailyCount * unitPrice * time).toLocaleString()
            } else {
                state.totalSaved = null 
            }
        }

    }
})

export const {updateInputs, emptyInputs, calculatedPrice} = appSlice.actions
export default appSlice.reducer