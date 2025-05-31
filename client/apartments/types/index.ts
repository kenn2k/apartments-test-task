import { ApartmentFormInput } from "@/hooks/useApartmentForm";
import { ChangeEvent, FormEvent } from "react";

export interface IApartment {
  _id: string;
  title: string;
  description: string;
  price: number;
  rooms: 1 | 2 | 3;
}

export interface UpdateArgs {
  id: string;
  updates: Partial<IApartment>;
}

export interface IFilters {
  priceMin?: number;
  priceMax?: number;
  rooms?: number;
}

export interface ApartmentListProps {
  apartments: IApartment[];
  onEdit: (apartment: IApartment) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  isLoading?: boolean;
}

export interface ApartmentFormProps {
  formData: ApartmentFormInput;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onEdit: IApartment | null;
}
