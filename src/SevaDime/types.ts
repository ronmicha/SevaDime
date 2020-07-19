type ID = { id: string };

type WithId<T> = T & ID;

type EntityId<T extends ID> = T["id"];

type Transaction = WithId<{
    name: string;
    description?: string;
    amount: number;
    isRecurring: boolean;
    date: number;
    monthId: EntityId<Month>;
}>;

type ExpenseUserData = WithId<{
    name: string;
    description?: string;
    budget?: number;
}>;

export type Month = WithId<{
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
