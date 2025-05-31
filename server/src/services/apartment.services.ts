import { FilterQuery } from "mongoose";
import { Apartment, IApartment } from "../models/apartment.model";

interface IFilters {
  priceMin?: number;
  priceMax?: number;
  rooms?: number;
}

export function findAll(filters: IFilters): Promise<IApartment[]> {
  const query: FilterQuery<IApartment> = {};

  if (filters.priceMin) query.price = { $gte: filters.priceMin };
  if (filters.priceMax)
    query.price = { ...query.price, $lte: filters.priceMax };
  if (filters.rooms) query.rooms = filters.rooms;

  return Apartment.find(query).exec();
}

export const create = (data: IApartment) => {
  return Apartment.create(data);
};

export const update = (id: string, updates: Partial<IApartment>) => {
  return Apartment.findByIdAndUpdate(id, updates, { new: true });
};

export function remove(id: string) {
  return Apartment.findByIdAndDelete(id);
}
