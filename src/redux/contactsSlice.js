import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
		items: []
	}
}
console.log(initialState.contacts.items);

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts : (state, action) => {
            state.contacts.items.push(action.payload) }
                    },
        deleteContacts : (state, action) => {
           state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload); 
        },
    },
);

export const contactsReducer = slice.reducer;
export const { deleteContacts, addContacts } = slice.actions;