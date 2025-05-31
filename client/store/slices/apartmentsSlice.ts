import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createApartment,
  fetchApartments,
  updateApartment,
  deleteApartment,
} from "../thunks/apartmentsThunk";
import { IApartment, IFilters } from "@/apartments/types";
import { ApartmentsState } from "../types";

const initialState: ApartmentsState = {
  items: [],
  status: "idle",
  error: null,
  isModalOpen: false,
  editingApartment: null,
  filters: {
    priceMin: undefined,
    priceMax: undefined,
    rooms: undefined,
  },
};

export const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IApartment | null>) => {
      state.isModalOpen = true;
      state.editingApartment = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.editingApartment = null;
      state.error = null;
      state.status = "idle";
    },
    setFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApartments.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchApartments.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.items = payload;
    });
    builder.addCase(fetchApartments.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload as string;
    });

    builder.addCase(createApartment.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(createApartment.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.items.push(payload);
      state.isModalOpen = false;
      state.editingApartment = null;
    });
    builder.addCase(createApartment.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload as string;
    });

    builder.addCase(updateApartment.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(updateApartment.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      const idx = state.items.findIndex((a) => a._id === payload._id);
      if (idx !== -1) state.items[idx] = payload;
      state.isModalOpen = false;
      state.editingApartment = null;
    });
    builder.addCase(updateApartment.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload as string;
    });

    builder.addCase(deleteApartment.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(deleteApartment.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.items = state.items.filter((a) => a._id !== payload);
    });
    builder.addCase(deleteApartment.rejected, (state, { payload }) => {
      state.status = "failed";
      state.error = payload as string;
    });
  },
});

export const { openModal, closeModal, setFilters } = apartmentsSlice.actions;
