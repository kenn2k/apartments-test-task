import axios from "axios";
import { IApartment, IFilters } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_BASE_URL is not defined in environment variables"
  );
}

export const getApartments = (filters: IFilters) =>
  axios.get(BASE_URL, { params: filters });

export const postApartment = (data: Omit<IApartment, "id">) =>
  axios.post(BASE_URL, data);

export const patchApartment = (id: string, data: Partial<IApartment>) =>
  axios.patch(`${BASE_URL}/${id}`, data);

export const deleteApartment = (id: string) =>
  axios.delete(`${BASE_URL}/${id}`);
