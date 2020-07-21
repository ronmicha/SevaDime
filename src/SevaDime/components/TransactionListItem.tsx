import { IonItem, IonLabel } from "@ionic/react";
import Collapse from "@kunukn/react-collapse";
import React, { FC, memo, useState } from "react";
import { Transaction } from "../types";
import { formatDate } from "../utils/general";

export type TransactionListItemProps = Omit<Transaction, "id" | "categoryId" | "paymentMethodId"> & {
   categoryName?: string;
   paymentMethodName?: string;
};

const TransactionListItem: FC<TransactionListItemProps> = (props: TransactionListItemProps): JSX.Element => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const { name, description, amount, date, categoryName, paymentMethodName } = props;

   const formattedAmount = amount.toLocaleString();
   const formattedDate = formatDate(new Date(date));

   const toggleCollapse = (): void => {
      setIsOpen((isOpen) => !isOpen);
   };

   return (
      <>
         <IonItem button={true} onClick={toggleCollapse}>
            <IonLabel>{name}</IonLabel>
            <IonLabel>{formattedDate}</IonLabel>
            <IonLabel>{categoryName}</IonLabel>
            <IonLabel>{paymentMethodName}</IonLabel>
            <IonLabel>{formattedAmount}</IonLabel>
         </IonItem>
         <Collapse isOpen={isOpen}>
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
