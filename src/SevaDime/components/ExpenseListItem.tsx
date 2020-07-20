import { IonItem, IonLabel } from "@ionic/react";
import Collapse from "@kunukn/react-collapse";
import React, { FC, memo, useState } from "react";
import { Expense } from "../types";
import { getReadableDate } from "../utils/general";
import styled from "@emotion/styled";

const StyledCollapseIonItem = styled(IonItem)`
   flex-direction: column; !important
`;

type ExpenseItemProps = Omit<Expense, "id" | "categoryId" | "paymentMethodId"> & {
   categoryName?: string;
   paymentMethodName?: string;
};

const ExpenseListItem: FC<ExpenseItemProps> = (props: ExpenseItemProps): JSX.Element => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const { name, description, amount, date, categoryName, paymentMethodName } = props;

   const readableDate = getReadableDate(new Date(date));

   const toggleCollapse = (): void => {
      setIsOpen((isOpen) => !isOpen);
   };

   return (
      <>
         <IonItem button={true} onClick={toggleCollapse}>
            <IonLabel>{name}</IonLabel>
            <IonLabel>{readableDate}</IonLabel>
            <IonLabel>{categoryName}</IonLabel>
            <IonLabel>{paymentMethodName}</IonLabel>
            <IonLabel>{amount}</IonLabel>
         </IonItem>
         <Collapse isOpen={isOpen}>
            <IonItem>
               <IonLabel>{name}</IonLabel>
               <IonLabel>{description}</IonLabel>
               <IonLabel>{readableDate}</IonLabel>
               <IonLabel>{categoryName}</IonLabel>
               <IonLabel>{paymentMethodName}</IonLabel>
               <IonLabel>{amount}</IonLabel>
            </IonItem>
         </Collapse>
      </>
   );
};

export default memo(ExpenseListItem);
