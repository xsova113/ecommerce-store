import { Product } from "@/types";
import axios from "axios";

const getProduct = async (id: string): Promise<Product> => {
  const res = await axios(
    `http://localhost:3001/api/35076deb-c51a-42e5-bd58-c53434d5ce23/products/${id}`
  );

  return res.data;
};

export default getProduct;
