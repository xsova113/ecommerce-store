import { Category } from "@/types";

export const routes = (
  data: Category[],
  pathname: string,
  paramsId: string
) => {
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return routes;
};
