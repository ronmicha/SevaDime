import { IonItemDivider, IonLabel, IonList } from "@ionic/react";
import Collapse from "@kunukn/react-collapse";
import React, { FC, memo } from "react";
import { TransactionListItem } from ".";
import useToggle from "../hooks/useToggle";
import { ThemeColor, Transaction } from "../types";
import { getCategoryName, getPaymentMethodName } from "../utils";

type TransactionListProps = {
    title: string;
    titleColor?: ThemeColor;
    transactions: Transaction[];
};

const TransactionList: FC<TransactionListProps> = (props: TransactionListProps): JSX.Element => {
   const { value, toggle } = useToggle(true);

   const { title, titleColor = "primary", transactions } = props;

   return (
      <IonList>
         <IonItemDivider color={titleColor} onClick={toggle}>
            <IonLabel>
               {title}
            </IonLabel>
         </IonItemDivider>

         <Collapse isOpen={value}>
            {transactions.map(({ id, name, description, amount, date, categoryId, paymentMethodId, isRecurring }) => {
               const categoryName = categoryId && getCategoryName(categoryId);
               const paymentMethodName = paymentMethodId && getPaymentMethodName(paymentMethodId);

               return (
                  <TransactionListItem
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
         </Collapse>
      </IonList>
   );
};

export default memo(TransactionList);
