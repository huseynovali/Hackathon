import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: true,
};

const detailSlice = createSlice({
    name: 'detailSlice',
    initialState,
    reducers: {
        setShowTrue: (state) => {
            state.show = true;
        },
        setShowFalse: (state) => {
            state.show = false;
        },
    },
});

export const { setShowTrue, setShowFalse,show } = detailSlice.actions;
export default detailSlice.reducer;
