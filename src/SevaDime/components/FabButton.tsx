import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import React, { FC, memo } from "react";
import { ThemeColor } from "../types";

type FabButtonProps = {
    vertical?: "bottom" | "center" | "top";
    horizontal?: "center" | "end" | "start";
    color?: ThemeColor;
    icon?: string;
    text?: string;
};

const FabButton: FC<FabButtonProps> = (props: FabButtonProps): JSX.Element => {
   const { vertical, horizontal, icon, text, color = "primary" } = props;

   return (
      <IonFab vertical={vertical} horizontal={horizontal} slot="fixed">
         <IonFabButton color={color}>
            {icon ? (<IonIcon icon={icon} />) : text}
         </IonFabButton>
      </IonFab>
   );
};

export default memo(FabButton);
