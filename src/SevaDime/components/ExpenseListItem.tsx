import { IonItem, IonLabel } from "@ionic/react";
import React, { FC, memo, useMemo } from "react";
import { mockCategories, mockPaymentMethods } from "../mockData";
import { Expense } from "../types";
import { findEntityById, getReadableDate } from "../utils/general";

type ExpenseItemProps = Omit<Expense, "id">;

const ExpenseListItem: FC<ExpenseItemProps> = (props: ExpenseItemProps): JSX.Element => {
   const { name, description, amount, date, categoryId, paymentMethodId } = props;

   const categoryName = useMemo(() => findEntityById(mockCategories, categoryId)?.name, [categoryId]);
   const paymentMethodName = useMemo(() => findEntityById(mockPaymentMethods, paymentMethodId)?.name, [paymentMethodId]);

   return (
      <IonItem>
         <IonLabel>{name}</IonLabel>
         <IonLabel>{description}</IonLabel>
         <IonLabel>{getReadableDate(new Date(date))}</IonLabel>
         <IonLabel>{categoryName}</IonLabel>
         <IonLabel>{paymentMethodName}</IonLabel>
         <IonLabel>{amount}</IonLabel>
      </IonItem>
   );
};

export default memo(ExpenseListItem);
