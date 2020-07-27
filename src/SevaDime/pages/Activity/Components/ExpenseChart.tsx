import React, { FC, memo, useState } from "react";
import { PieChart } from "../../../components";
import { Expense } from "../../../types";
import { getCategoryName, getPaymentMethodName } from "../../../utils";

type ExpenseChartProps = {
    expenses: Expense[];
};

enum ChartDataType {
    Category = "category",
    PaymentMethod = "payment method"
 }

const createChartData = (expenses: Expense[], dataType: ChartDataType): Array<[string, number]> => {
   const data: Record<string, number> = {};

   for (const expense of expenses) {
      const userItemName = (dataType === ChartDataType.Category ?
         getCategoryName(expense.categoryId) :
         getPaymentMethodName(expense.paymentMethodId))!;

      data[userItemName] = (data[userItemName] || 0) + expense.amount;
   }

   return Object.entries(data).map(([userItemName, amount]) => [userItemName, amount]);
};

const ExpenseChart: FC<ExpenseChartProps> = (props: ExpenseChartProps): JSX.Element => {
   const { expenses } = props;

   const [chartDataType, setChartDataType] = useState<ChartDataType>(ChartDataType.Category);

   return (
      <PieChart
         title={`Expenses by ${chartDataType}`}
         height={"25%"}
         width={"100%"}
         dataLegend={["User Item Name", "Amount"]}
         data={createChartData(expenses, chartDataType)}
      />
   );
};

export default memo(ExpenseChart);
