import { createSlice } from "@reduxjs/toolkit";

import {
  apiAddPhonebookContact,
  apiDeletePhonebookContact,
  apiPhonebookContact,
} from "./operations";

const INITIAL_STATE = {
  phonebookContacts: null,
  isError: false,
  isLoading: false,
};

const phonebookSlice = createSlice({
  // Ім'я слайсу
  name: "phonebook", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiPhonebookContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiPhonebookContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.phonebookContacts = action.payload;
      })

      .addCase(apiPhonebookContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiAddPhonebookContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiAddPhonebookContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.phonebookContacts.push(action.payload);
      })
      .addCase(apiAddPhonebookContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiDeletePhonebookContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiDeletePhonebookContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.phonebookContacts = state.phonebookContacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeletePhonebookContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),

  // Об'єкт редюсерів
});

// Генератори екшенів
//export const { addContact, deleteContact } = contactsSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
