export type ID = { id: string };

export type WithId<T> = T & ID;

export type EntityId<T extends ID> = T["id"];

export type ThemeColor = "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark";

export type Transaction = WithId<{
    name: string;
    description?: string;
    amount: number;
    date: number;
    isRecurring: boolean;
    categoryId?: EntityId<ExpenseCategory>;
    paymentMethodId?: EntityId<PaymentMethod>;
}>;

export type ExpenseCategory = WithId<{
    name: string;
    description?: string;
    budget?: number;
}>;

export type PaymentMethod = WithId<{
    name: string;
    description?: string;
}>;

export type MonthlyPaymentMethodBudget = Record<EntityId<PaymentMethod>, number>;

export type Income = Omit<Transaction, "categoryId" | "paymentMethodId">;

export type Expense = Transaction & Required<Pick<Transaction, "categoryId" | "paymentMethodId">>;

export type Month = WithId<{
    startDate: Date;
    endDate: Date;
    expenses: Expense[];
    incomes: Income[];
    categories: ExpenseCategory[];
    paymentMethodBudget: MonthlyPaymentMethodBudget;
}>;
