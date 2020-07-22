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

// general user item details, unrelated to a specific month
export type UserItem = WithId<{
    name: string;
    description?: string;
}>;

export type Month = WithId<{
    startDate: Date;
    endDate: Date;
}>;

// instance of userItem in a specific month
export type MonthlyUserItem = WithId<{
    userItemId: EntityId<UserItem>;
    monthId: EntityId<Month>;
    budget?: number;
    usedBudget: number;
}>;

export type ExpenseCategory = UserItem;

export type PaymentMethod = UserItem;

export type Income = Omit<Transaction, "categoryId" | "paymentMethodId">;

export type Expense = Transaction & Required<Pick<Transaction, "categoryId" | "paymentMethodId">>;
