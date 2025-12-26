import {configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from "./stagaireSlice"
import absanceReducer from "./absanceSlice"

export const store = configureStore ({
    reducer: {
        stagiaiers: stagiaireReducer,
        absences: absenceReducer,
    },
});