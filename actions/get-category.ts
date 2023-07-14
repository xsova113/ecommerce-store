import { Category } from "@/types";
import axios from "axios";

const getCategory = async (id: string): Promise<Category> => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
  );

  return res.data;
};

export default getCategory;
