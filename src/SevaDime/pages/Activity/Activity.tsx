import { IonContent, IonPage } from "@ionic/react";
import React, { FC, useState } from "react";
import { FabButton, PieChart, TransactionList } from "../../components";
import { Expense, Income, Month } from "../../types";
import { getCategoryName, getPaymentMethodName, sortItemsBy } from "../../utils";

type ActivityProps = {
   months: Month[];
};

enum ChartDataType {
   Category = "category",
   PaymentMethod = "payment method"
}

const createExpenseChartData = (expenses: Expense[], dataType: ChartDataType): Array<[string, number]> => {
   const data: Record<string, number> = {};

   for (const expense of expenses) {
      const userItemName = (dataType === ChartDataType.Category ?
         getCategoryName(expense.categoryId) :
         getPaymentMethodName(expense.paymentMethodId))!;

      data[userItemName] = (data[userItemName] || 0) + expense.amount;
   }

   return Object.entries(data).map(([userItemName, amount]) => [userItemName, amount]);
};

/**
 * ToDo:
 * 1. CRUD income/expense
 * 2. Turn transactions to sortable tables
 * 3. Show current month
 * 4. Ability to choose a month
 * 5. When clicking a piece in the pie chart, open a dialog with all relevant expenses
 * 6. Recurring transactions
 * **/

const Activity: FC<ActivityProps> = (props: ActivityProps) => {
   const [incomes, setIncomes] = useState<Income[]>(sortItemsBy(props.incomes, "date", "desc"));
   const [expenses, setExpenses] = useState<Expense[]>(sortItemsBy(props.expenses, "date", "desc"));
   // ToDo: encapsulate state in a different chart component
   const [chartDataType, setChartDataType] = useState<ChartDataType>(ChartDataType.Category);

   return (
      <IonPage>
         <IonContent>
            <TransactionList title={"Incomes"} transactions={incomes} />
            <TransactionList title={"Expenses"} transactions={expenses} />
         </IonContent>
         <PieChart
            title={`Expenses by ${chartDataType}`}
            height={"25%"}
            width={"100%"}
            dataLegend={["User Item Name", "Amount"]}
            data={createExpenseChartData(expenses, chartDataType)}
         />
         <FabButton vertical={"bottom"} horizontal={"start"} text={"+ Expense"} color={"medium"} />
         <FabButton vertical={"bottom"} horizontal={"end"} text={"+ Income"} color={"success"} />
      </IonPage>
   );
};

export default Activity;
