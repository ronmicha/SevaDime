import { v4 as uuid } from "uuid";
import { EntityId, ID, WithId } from "../types";

export const generateEntityId = (): ID => ({ id: uuid() });

export const findEntityById = <T>(collection: Array<WithId<T>>, id: EntityId<WithId<T>>): T | undefined => {
   return collection.find(({ id: entityId }) => entityId === id);
};

export const formatDate = (date: Date, delimiter = "-"): string => {
   const day = date.getDate().toString().padStart(2, "0");
   const month = (date.getMonth() + 1).toString().padStart(2, "0");
   const year = date.getFullYear();

   return [day, month, year].join(delimiter);
};

export const sortItemsBy = <T>(transactions: Array<T>, propName: keyof T, direction: "asc" | "desc" = "asc"): Array<T> => {
   const sorter: number = direction === "asc" ? 1 : -1;
   return [...transactions].sort((t1, t2) => t1[propName] > t2[propName] ? sorter : -sorter);
};
