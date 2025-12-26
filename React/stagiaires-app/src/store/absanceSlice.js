import { createSlice } from "@reduxjs/toolkit";

const absenceSlice = createSlice ({
    name : "absence" ,
    initialState : {
        list :[]
    },
    reducers: {
        addAbsence : (state, action) => {
            state.list.push ({
                ...action.payload,
                date: new Date(). toISOString(),
            });
        }
    }
});
export const { addAbsence } = absenceSlice.actions;
export default absenceSlice.reducer;
