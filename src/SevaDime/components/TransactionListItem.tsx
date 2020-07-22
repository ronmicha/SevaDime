import { IonItem, IonLabel } from "@ionic/react";
import Collapse from "@kunukn/react-collapse";
import React, { FC, memo } from "react";
import useToggle from "../hooks/useToggle";
import { Transaction } from "../types";
import { formatDate } from "../utils";

export type TransactionListItemProps = Omit<Transaction, "id" | "categoryId" | "paymentMethodId"> & {
   categoryName?: string;
   paymentMethodName?: string;
};

const TransactionListItem: FC<TransactionListItemProps> = (props: TransactionListItemProps): JSX.Element => {
   const { value, toggle } = useToggle(false);

   const { name, description, amount, date, categoryName, paymentMethodName } = props;

   const formattedAmount = amount.toLocaleString();
   const formattedDate = formatDate(new Date(date));

   return (
      <>
         <IonItem button={true} onClick={toggle}>
            <IonLabel>{name}</IonLabel>
            <IonLabel>{formattedDate}</IonLabel>
            <IonLabel>{categoryName}</IonLabel>
            <IonLabel>{paymentMethodName}</IonLabel>
            <IonLabel>{formattedAmount}</IonLabel>
         </IonItem>
         <Collapse isOpen={value}>
            <IonItem>
               <IonLabel>{name}</IonLabel>
               <IonLabel>{description}</IonLabel>
               <IonLabel>{formattedDate}</IonLabel>
               <IonLabel>{categoryName}</IonLabel>
               <IonLabel>{paymentMethodName}</IonLabel>
               <IonLabel>{formattedAmount}</IonLabel>
            </IonItem>
         </Collapse>
      </>
   );
};

export default memo(TransactionListItem);
