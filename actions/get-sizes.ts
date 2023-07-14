import { Size } from "@/types";
import axios from "axios";

const getSizes = async (): Promise<Size[]> => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/sizes`
  );

  return res.data;
};

export default getSizes;
