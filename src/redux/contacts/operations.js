import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/slice";

export const apiPhonebookContact = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddPhonebookContact = createAsyncThunk(
  "contacts/addNew",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/contacts", formData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeletePhonebookContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
