import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apartmentsApi from "@/apartments/api/apartmentsApi";
import { IApartment, IFilters, UpdateArgs } from "@/apartments/types";

export const fetchApartments = createAsyncThunk(
  "apartments/fetchAll",
  async (filters: IFilters, thunkAPI) => {
    try {
      const response = await apartmentsApi.getApartments(filters);
      return response.data as IApartment[];
    } catch (err: unknown) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }

      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const createApartment = createAsyncThunk(
  "apartments/create",
  async (apartment: IApartment) => {
    try {
      const response = await apartmentsApi.postApartment(apartment);
      return response.data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return err.message;
      }
    }
  }
);

export const updateApartment = createAsyncThunk<IApartment, UpdateArgs>(
  "apartments/update",
  async ({ id, updates }, thunkAPI) => {
    if (!id) {
      return thunkAPI.rejectWithValue("Didn't provide  _id");
    }

    try {
      const { data } = await apartmentsApi.patchApartment(id, updates);
      return data as IApartment;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }

      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const deleteApartment = createAsyncThunk<string, string>(
  "apartments/delete",
  async (id, thunkAPI) => {
    if (!id) {
      return thunkAPI.rejectWithValue("Didn't provide _id");
    }
    try {
      await apartmentsApi.deleteApartment(id);

      return id;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);
