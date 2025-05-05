import { createSlice } from '@reduxjs/toolkit';

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        value: [{
            'name' : 'Ganar todos los cursos del TDS',
            'description' : 'Ganar todos los cursos',
            'dueDate' : '2025-12-12'
        }]
    },
    reducers:{
        addGoal:(state, action) => {
            state.value.push(action.payload);
        }

    }
});
export const { addGoal } = goalSlice.actions;
export default goalSlice.reducer;