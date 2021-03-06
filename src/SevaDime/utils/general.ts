import { v4 as uuid } from "uuid";
import { EntityId, ID, WithId } from "../types";

export const generateEntityId = (): ID => ({ id: uuid() });

export const findEntityById = <T>(entities: Array<WithId<T>>, id: EntityId<WithId<T>>): T | undefined => {
   return entities.find(({ id: entityId }) => entityId === id);
};

export const sortItemsBy = <T>(items: Array<T>, propName: keyof T, direction: "asc" | "desc" = "asc"): Array<T> => {
   const sorter: number = direction === "asc" ? 1 : -1;
   return [...items].sort((t1, t2) => t1[propName] > t2[propName] ? sorter : -sorter);
};
