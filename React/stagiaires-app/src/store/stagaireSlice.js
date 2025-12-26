import { creatSlice} from "@reduxjs/toolkit";

const initialState = {
    list: [
        {id: 1, nom: "Ali", groupe: "DEV101", discipline: 12},
        {id: 2, nom: "Sara", groupe: "DEV101", discipline: 15 },
        {id: 3, nom: "Youssef", groupe: "DEV102", discipline: 14},
    ],
    filterGroup: "all"
};

const stagiaireSlice = creatSlice ({
    name:"stagiaires",
    reducers: {
        setFilterGroup : (state, action) => {
            state.filterGroup = action.payload;
        },
        décrementNoteDiscipline: (state, action) => {
            const stg = state.list.find(s => s.id === action.payload);
            if (stg) stg.discipline--;
        }
    }
});

export const { setFilterGroup, decrementNoteDescipline } = stagiaireSlice.actions;
export default stagiaireSlice.reducer;