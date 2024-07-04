import { TRout, TUserPath } from "../types";

export const routeGenerator = (items: TUserPath[]) => {
  const adminRoutes = items.reduce((acc: TRout[], item) => {
    if (item.element && item.path) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.name && item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!, //not Null( ! )asuartion দিতে হবে কারন আমরা sure যে এখানে null হবেনা (m-28.1==v-6.35)
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return adminRoutes;
};
