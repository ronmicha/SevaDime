import { v4 as uuid } from "uuid";
import { EntityId, ID, WithId } from "../types";

export const generateEntityId = (): ID => ({ id: uuid() });

export const findEntityById = <T>(collection: Array<WithId<T>>, id: EntityId<WithId<T>>): T|undefined => {
   return collection.find(({ id: entityId }) => entityId === id);
};

export const getReadableDate = (date: Date, delimiter = "-"): string => {
   const day = date.getDate().toString().padStart(2, "0");
   const month = (date.getMonth() + 1).toString().padStart(2, "0");
   const year = date.getFullYear();

   return [day, month, year].join(delimiter);
};
