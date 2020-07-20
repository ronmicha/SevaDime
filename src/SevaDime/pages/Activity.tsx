import { IonContent, IonList, IonPage } from "@ionic/react";
import React, { FC } from "react";
import { ExpenseListItem } from "../components";
import { Expense, Income } from "../types";

type ActivityProps = {
   expenses: Expense[];
   incomes: Income[];
};

const Activity: FC<ActivityProps> = (props: ActivityProps) => {
   const { expenses, incomes } = props;

   const sortedExpensesByDate = [...expenses].sort((e1, e2) => e2.date - e1.date);

   return (
      <IonPage>
         <IonContent>
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
