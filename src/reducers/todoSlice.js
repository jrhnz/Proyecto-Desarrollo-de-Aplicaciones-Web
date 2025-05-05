import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [{
            'name' : 'Realizar la actividad 1',
            'description' : 'Instalar paquetes de librerias para actividad 1',
            'dueDate' : '2025-05-25'
        }]
    },
    reducers:{
        addTodo:(state, action) => {
            state.value.push(action.payload);
        }

    }
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
