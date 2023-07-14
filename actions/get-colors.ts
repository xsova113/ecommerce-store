import { Color } from "@/types";
import axios from "axios";

const getColors = async (): Promise<Color[]> => {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/colors`);

  return res.data;
};

export default getColors;
