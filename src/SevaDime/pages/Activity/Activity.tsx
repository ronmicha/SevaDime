import { IonPage } from "@ionic/react";
import React, { FC, useState } from "react";
import { Month } from "../../types";
import SelectedMonth from "./Components/SelectedMonth";

/**
 * ToDo:
 * 1. CRUD income/expense
 * 2. Turn transactions to sortable tables
 * 3. Show current month
 * 4. Ability to choose a month
 * 5. When clicking a piece in the pie chart, open a dialog with all relevant expenses
 * 6. Recurring transactions
 * **/

type ActivityProps = {
   months: Month[];
};

const Activity: FC<ActivityProps> = (props: ActivityProps) => {
   const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(props.months.length - 1);

   const { incomes, expenses, categories, endDate, paymentMethodBudget } = props.months[selectedMonthIndex];

   const selectMonth = (index: number): void => {
      setSelectedMonthIndex(index);
   };

   return (
      <IonPage>
         <SelectedMonth
            incomes={incomes}
            expenses={expenses}
            categories={categories}
            endDate={endDate}
            paymentMethodBudget={paymentMethodBudget}
         />
      </IonPage>
   );
};

export default Activity;
