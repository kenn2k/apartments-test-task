import { useState, ChangeEvent } from "react";

export interface ApartmentFormInput {
  title: string;
  description: string;
  price: number;
  rooms: 1 | 2 | 3;
}

export const useApartmentForm = () => {
  const [formData, setFormData] = useState<ApartmentFormInput>({
    title: "",
    description: "",
    price: 0,
    rooms: 1,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price"
          ? parseFloat(value) || 0
          : name === "rooms"
          ? (parseInt(value, 10) as 1 | 2 | 3)
          : value,
    }));
  };

  const resetForm = () => {
    setFormData({ title: "", description: "", price: 0, rooms: 1 });
  };

  return { formData, setFormData, handleChange, resetForm };
};
