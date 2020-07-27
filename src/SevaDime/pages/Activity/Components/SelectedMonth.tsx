import { IonContent } from "@ionic/react";
import React, { FC, memo, useState } from "react";
import { FabButton, TransactionList } from "../../../components";
import { EntityId, Month, Transaction } from "../../../types";
import { sortItemsBy } from "../../../utils";
import ExpenseChart from "./ExpenseChart";

type SelectedMonthProps = Omit<Month, "id" | "startDate">;

type TransactionOrder = EntityId<Transaction>[];

const getInitialOrder = (transactions: Transaction[]): TransactionOrder => {
   return sortItemsBy(transactions, "date", "desc").map(({ id }) => id);
};

const SelectedMonth: FC<SelectedMonthProps> = (props: SelectedMonthProps): JSX.Element => {
   const { incomes, expenses, categories, endDate, paymentMethodBudget } = props;

   const [incomesOrder, setIncomesOrder] = useState<TransactionOrder>(getInitialOrder(incomes));
   const [expensesOrder, setExpensesOrder] = useState<TransactionOrder>(getInitialOrder(expenses));

   return (
      <IonContent>
         <TransactionList title={"Incomes"} transactions={incomes} />
         <TransactionList title={"Expenses"} transactions={expenses} />
         <ExpenseChart expenses={expenses} />
         <FabButton vertical={"bottom"} horizontal={"start"} text={"+ Expense"} color={"medium"} />
         <FabButton vertical={"bottom"} horizontal={"end"} text={"+ Income"} color={"success"} />
      </IonContent>
   );
};

export default memo(SelectedMonth);
