import { Document, Schema, model } from "mongoose";

export interface IApartment extends Document {
  title: string;
  description: string;
  price: number;
  rooms: 1 | 2 | 3;
}

const apartmentSchema = new Schema<IApartment>(
  {
    title: { type: String, required: true, maxlength: 90 },
    description: { type: String, required: true, maxlength: 335 },
    price: { type: Number, required: true, min: 0 },
    rooms: { type: Number, required: true, enum: [1, 2, 3] },
  },
  {
    timestamps: true,
  }
);

export const Apartment = model<IApartment>("Apartment", apartmentSchema);
