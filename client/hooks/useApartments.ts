import { FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useApartmentForm } from "./useApartmentForm";
import {
  createApartment,
  deleteApartment,
  fetchApartments,
  updateApartment,
} from "@/store/thunks/apartmentsThunk";
import { IApartment, IFilters } from "@/apartments/types";
import {
  closeModal,
  openModal,
  setFilters,
} from "@/store/slices/apartmentsSlice";

export const useApartments = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.apartments.items);
  const filters = useAppSelector((state) => state.apartments.filters);
  const status = useAppSelector((state) => state.apartments.status);
  const isModalOpen = useAppSelector((state) => state.apartments.isModalOpen);
  const editingApartment = useAppSelector(
    (state) => state.apartments.editingApartment
  );

  const { formData, setFormData, handleChange, resetForm } = useApartmentForm();

  useEffect(() => {
    dispatch(fetchApartments(filters));
  }, [dispatch, filters]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editingApartment) {
      dispatch(
        updateApartment({ id: editingApartment._id, updates: formData })
      );
    } else {
      dispatch(createApartment(formData as IApartment));
    }
    handleCancel();
  };

  const handleEditClick = (apt: IApartment) => {
    setFormData({
      title: apt.title,
      description: apt.description,
      price: apt.price,
      rooms: apt.rooms,
    });
    dispatch(openModal(apt));
  };

  const handleAddClick = () => {
    resetForm();
    dispatch(openModal(null));
  };

  const handleDeleteClick = (id: string) => {
    dispatch(deleteApartment(id));
  };

  const handleCancel = () => {
    resetForm();
    dispatch(closeModal());
  };

  const onFilterChange = (newFilters: IFilters) => {
    dispatch(setFilters(newFilters));
  };

  return {
    items,
    filters,
    status,
    isModalOpen,
    editingApartment,

    formData,
    handleChange,
    onSubmit,

    handleEditClick,
    handleAddClick,
    handleDeleteClick,

    handleCancel,

    onFilterChange,
  };
};
