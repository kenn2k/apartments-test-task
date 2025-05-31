"use client";
import { ApartmentList } from "./ApartmentList";
import { ApartmentForm } from "./ApartmentForm";
import { Modal } from "@/shared/UI/Modal";
import { ApartmentFilter } from "./ApartmentFilter";
import { useApartments } from "@/hooks/useApartments";

export const Apartment = () => {
  const {
    items,

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
  } = useApartments();

  return (
    <div className="min-h-screen bg-gray-50">
      <ApartmentFilter />
      <ApartmentList
        apartments={items}
        isLoading={status === "loading"}
        onAdd={handleAddClick}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        title={
          editingApartment ? "Редагувати квартиру" : "Додати нову квартиру"
        }
      >
        <ApartmentForm
          onSubmit={onSubmit}
          formData={formData}
          onClose={handleCancel}
          onEdit={editingApartment}
          handleChange={handleChange}
        />
      </Modal>
    </div>
  );
};
