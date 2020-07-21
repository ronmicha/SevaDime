import { IonContent, IonPage } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { TransactionList } from "../components";
import { mockCategories, mockPaymentMethods } from "../mockData";
import { Expense, Income } from "../types";
import { findEntityById, sortItemsBy } from "../utils/general";

type ActivityProps = {
   expenses: Expense[];
   incomes: Income[];
};

const Activity: FC<ActivityProps> = (props: ActivityProps) => {
   const [incomes, setIncomes] = useState<Income[]>([]);
   const [expenses, setExpenses] = useState<Expense[]>([]);

   useEffect(() => {
      setIncomes(sortItemsBy(props.incomes, "date", "desc"));
      setExpenses(sortItemsBy(props.expenses, "date", "desc"));
   }, [props.expenses, props.incomes]);

   return (
      <IonPage>
         <IonContent>
            <TransactionList
               title={"Incomes"}
               transactions={incomes}
            />
            <TransactionList
               title={"Expenses"}
               transactions={expenses}
               getCategoryName={(categoryId): string | undefined => findEntityById(mockCategories, categoryId)?.name}
               getPaymentMethodName={(paymentMethodId): string | undefined => findEntityById(mockPaymentMethods, paymentMethodId)?.name}
            />
         </IonContent>
      </IonPage>
   );
};

export default Activity;
