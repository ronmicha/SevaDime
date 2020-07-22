import { mockCategories, mockPaymentMethods } from "../mockData";
import { EntityId, Expense, ExpenseCategory, PaymentMethod, UserItem } from "../types";
import { findEntityById } from "./general";

const getUserItemName = (collection: UserItem[], id: EntityId<UserItem>): UserItem["name"] | undefined => {
   return findEntityById(collection, id)?.name;
};

export const getCategoryName = (categoryId: EntityId<ExpenseCategory>): Expense["name"] | undefined => {
   return getUserItemName(mockCategories, categoryId);
};

export const getPaymentMethodName = (paymentMethodId: EntityId<PaymentMethod>): PaymentMethod["name"] | undefined => {
   return getUserItemName(mockPaymentMethods, paymentMethodId);
};
