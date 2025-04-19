import { configureStore } from "@reduxjs/toolkit";
import appReducers from './appSlice'

const store = configureStore({
    reducer : {
        allReducers : appReducers
    }
})

export default store