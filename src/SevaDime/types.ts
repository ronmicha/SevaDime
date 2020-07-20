export type ID = { id: string };

export type WithId<T> = T & ID;

export type EntityId<T extends ID> = T["id"];

export type Transaction = WithId<{
    name: string;
    description?: string;
    amount: number;
    date: number;
    isRecurring: boolean;
}>;

type ExpenseUserData = WithId<{
    name: string;
    description?: string;
    periodicBudget?: number;
}>;

export type Period = WithId<{
    startDate: Date;
    endDate: Date;
}>;

export type ExpenseCategory = ExpenseUserData;

export type PaymentMethod = ExpenseUserData;

export type Income = Transaction;

export type Expense = Transaction & {
    categoryId: EntityId<ExpenseCategory>;
    paymentMethodId: EntityId<PaymentMethod>;
};
