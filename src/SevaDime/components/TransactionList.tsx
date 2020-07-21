import { IonItemDivider, IonLabel, IonList } from "@ionic/react";
import React, { FC, memo } from "react";
import { TransactionListItem } from ".";
import { Transaction } from "../types";

type GetNameByIdFn = (id: any) => string | undefined;

type TransactionListProps = {
    title: string;
    titleColor?: string;
    transactions: Transaction[];
    getCategoryName?: GetNameByIdFn;
    getPaymentMethodName?: GetNameByIdFn;
};

const TransactionList: FC<TransactionListProps> = (props: TransactionListProps): JSX.Element => {
   const { title, titleColor = "primary", transactions, getCategoryName, getPaymentMethodName } = props;

   return (
      <IonList>
         <IonItemDivider color={titleColor}>
            <IonLabel>
               {title}
            </IonLabel>
         </IonItemDivider>

         {transactions.map(({ id, name, description, amount, date, categoryId, paymentMethodId, isRecurring }) => {
            const categoryName = categoryId && getCategoryName!(categoryId);
            const paymentMethodName = paymentMethodId && getPaymentMethodName!(paymentMethodId);

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
      </IonList>
   );
};

export default memo(TransactionList);
