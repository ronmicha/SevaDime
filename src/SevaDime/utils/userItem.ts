import { mockMonths, mockPaymentMethods } from "../mockData";
import { EntityId, Expense, ExpenseCategory, PaymentMethod } from "../types";
import { findEntityById } from "./general";

export const getCategoryName = (categoryId: EntityId<ExpenseCategory>): Expense["name"] | undefined => {
   return findEntityById(mockMonths[0].categories, categoryId)?.name;
};

export const getPaymentMethodName = (paymentMethodId: EntityId<PaymentMethod>): PaymentMethod["name"] | undefined => {
   return findEntityById(mockPaymentMethods, paymentMethodId)?.name;
};
