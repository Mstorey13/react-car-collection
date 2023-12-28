import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        car_name: "Car Name",
        make: "Make",
        model: "Model",
        year: "Year",
    },
    reducers: {
        chooseName: (state, action) => { state.car_name = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseMake, chooseModel, chooseYear} = rootSlice.actions