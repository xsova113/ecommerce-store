import { Billboard } from "@/types";

const getBilboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/billboards/" + id);

  return res.json();
};

export default getBilboard;
