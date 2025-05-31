import { IApartment, IFilters } from "@/apartments/types";

export interface ApartmentsState {
  items: IApartment[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  isModalOpen: boolean;
  editingApartment: IApartment | null;
  filters: IFilters;
}
