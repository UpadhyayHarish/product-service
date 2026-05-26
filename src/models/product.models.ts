import { Schema, model } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  sku: string;
  category: string;
}

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    sku: { type: String, required: true, unique: true },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

export const Product = model("Product", productSchema);
