"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { IFilters } from "../types";
import { setFilters } from "@/store/slices/apartmentsSlice";

export const ApartmentFilter = () => {
  const dispatch = useAppDispatch();
  const filters: IFilters = useAppSelector((state) => state.apartments.filters);
  const handleChange =
    (field: keyof IFilters) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;

      const value: number | undefined = raw !== "" ? Number(raw) : undefined;

      dispatch(
        setFilters({
          ...filters,
          [field]: value,
        })
      );
    };
  return (
    <section className="mb-6">
      <h1 className="text-center pt-10 text-2xl">
        Введіть значення для фільтрації
      </h1>
      <form className="p-4 flex justify-center gap-4 shadow-md mb-6">
        <input
          type="number"
          placeholder="Мін. ціна"
          value={filters.priceMin ?? ""}
          onChange={handleChange("priceMin")}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Макс. ціна"
          value={filters.priceMax ?? ""}
          onChange={handleChange("priceMax")}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="К-сть кімнат"
          value={filters.rooms ?? ""}
          onChange={handleChange("rooms")}
          className="border p-2 rounded"
        />
      </form>
    </section>
  );
};
