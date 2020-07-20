import { IonContent, IonLabel, IonList, IonPage } from "@ionic/react";
import React, { FC } from "react";
import { ExpenseListItem } from "../components";
import { Expense, Income, Transaction } from "../types";

type ActivityProps = {
   expenses: Expense[];
   incomes: Income[];
};

const sortByDate = <T extends Transaction>(transactions: Array<T>): Array<T> => {
   return [...transactions].sort((t1, t2) => t1.date - t2.date);
};

const Activity: FC<ActivityProps> = (props: ActivityProps) => {
   const { expenses, incomes } = props;

   const sortedExpensesByDate = sortByDate(expenses);
   const sortedIncomesByDate = sortByDate(incomes);

   return (
      <IonPage>
         <IonContent>
            <IonLabel>Expenses</IonLabel>
            <IonList>
               {sortedExpensesByDate.map(({ id, name, description, amount, date, categoryId, paymentMethodId, isRecurring }) => (
                  <ExpenseListItem
                     key={id}
                     name={name}
                     description={description}
                     amount={amount}
                     date={date}
                     categoryId={categoryId}
                     paymentMethodId={paymentMethodId}
                     isRecurring={isRecurring}
                  />
               ))}
            </IonList>
         </IonContent>
      </IonPage>
   );
};

export default Activity;
