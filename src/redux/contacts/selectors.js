import { createSelector } from "@reduxjs/toolkit";

import { selectFiltered } from "../filters/selectors";
export const selectPhonebookContacts = (state) =>
  state.phonebook.phonebookContacts;
export const selectPhonebookIsLoading = (state) => state.phonebook.isLoading;
export const selectPhonebookIsError = (state) => state.phonebook.isError;

export const selectFilteredContacts = createSelector(
  [selectPhonebookContacts, selectFiltered],
  (contactsPhonebookList, filter) => {
    return (
      contactsPhonebookList !== null &&
      contactsPhonebookList.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
);
