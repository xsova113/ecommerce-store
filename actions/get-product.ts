import { Product } from "@/types";
import axios from "axios";

const getProduct = async (id: string): Promise<Product> => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
  );

  return res.data;
};

export default getProduct;
