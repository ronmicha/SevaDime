import { ExpenseCategory, PaymentMethod, Expense, Income } from "./types";
import { generateEntityId } from "./utils";

export const mockCategories: ExpenseCategory[] = [
   {
      ...generateEntityId(),
      name: "Car2Go",
   },
   {
      ...generateEntityId(),
      name: "Hanging out",
   },
   {
      ...generateEntityId(),
      name: "Food",
   },
   {
      ...generateEntityId(),
      name: "Bills",
   },
];

export const mockPaymentMethods: PaymentMethod[] = [
   {
      ...generateEntityId(),
      name: "Shared credit card",
   },
   {
      ...generateEntityId(),
      name: "Discount credit card",
   },
];

export const mockExpenses: Expense[] = [
   {
      ...generateEntityId(),
      name: "Gazlan",
      amount: 78,
      date: Date.now(),
      categoryId: mockCategories[2].id,
      paymentMethodId: mockPaymentMethods[0].id,
      isRecurring: false,
   },
   {
      ...generateEntityId(),
      name: "Internet",
      amount: 78,
      date: Date.now(),
      categoryId: mockCategories[3].id,
      paymentMethodId: mockPaymentMethods[1].id,
      isRecurring: true,
   },
   {
      ...generateEntityId(),
      name: "Car2Go subscription",
      amount: 50,
      date: Date.now(),
      categoryId: mockCategories[0].id,
      paymentMethodId: mockPaymentMethods[0].id,
      isRecurring: true,
   },
   {
      ...generateEntityId(),
      name: "Happy hour",
      amount: 130,
      date: Date.now(),
      categoryId: mockCategories[1].id,
      paymentMethodId: mockPaymentMethods[1].id,
      isRecurring: false,
   },
   {
      ...generateEntityId(),
      name: "Tami 4",
      amount: 67,
      date: Date.now(),
      categoryId: mockCategories[3].id,
      paymentMethodId: mockPaymentMethods[1].id,
      isRecurring: true,
   },
   {
      ...generateEntityId(),
      name: "Flowers for mom & dad",
      amount: 129,
      date: Date.now(),
      categoryId: mockCategories[1].id,
      paymentMethodId: mockPaymentMethods[0].id,
      isRecurring: false,
   },
];

export const mockIncomes: Income[] = [
   {
      ...generateEntityId(),
      name: "Shun's salary",
      amount: 20000,
      isRecurring: true,
      date: Date.now(),
   },
   {
      ...generateEntityId(),
      name: "Ron's salary",
      amount: 10000,
      isRecurring: true,
      date: Date.now(),
   },
];
