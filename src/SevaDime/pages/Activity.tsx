import { IonContent, IonLabel, IonList, IonPage, IonItemDivider } from "@ionic/react";
import React, { FC, useState, useEffect } from "react";
import { ExpenseListItem } from "../components";
import { mockCategories, mockPaymentMethods } from "../mockData";
import { Expense, Income, Transaction } from "../types";
import { findEntityById } from "../utils/general";

type ActivityProps = {
   expenses: Expense[];
   incomes: Income[];
};

const sortByDate = <T extends Transaction>(transactions: Array<T>): Array<T> => {
   return [...transactions].sort((t1, t2) => t1.date - t2.date);
};

const Activity: FC<ActivityProps> = (props: ActivityProps) => {
   const [expenses, setExpenses] = useState<Expense[]>([]);
   const [incomes, setIncomes] = useState<Income[]>([]);

   useEffect(() => {
      const sortedExpensesByDate = sortByDate(props.expenses);
      const sortedIncomesByDate = sortByDate(props.incomes);

      setExpenses(sortedExpensesByDate);
      setIncomes(sortedIncomesByDate);
   }, [props.expenses, props.incomes]);


   return (
      <IonPage>
         <IonContent>
            <IonList>
               <IonItemDivider color={"primary"}>
                  <IonLabel>
                     Basic Item Divider
                  </IonLabel>
               </IonItemDivider>
               {expenses.map(({ id, name, description, amount, date, categoryId, paymentMethodId, isRecurring }) => {
                  const categoryName = findEntityById(mockCategories, categoryId)?.name;
                  const paymentMethodName = findEntityById(mockPaymentMethods, paymentMethodId)?.name;

                  return (
                     <ExpenseListItem
                        key={id}
                        name={name}
                        description={description}
                        amount={amount}
                        date={date}
                        categoryName={categoryName}
                        paymentMethodName={paymentMethodName}
                        isRecurring={isRecurring}
                     />
                  );
               })}
            </IonList>
         </IonContent>
      </IonPage>
   );
};

export default Activity;
