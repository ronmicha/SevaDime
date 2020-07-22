import { useState } from "react";

type UseToggle = {
    value: boolean;
    toggle: () => void;
};

const useToggle = (initialValue: boolean): UseToggle => {
   const [value, setValue] = useState<boolean>(initialValue);

   const toggle = (): void => {
      setValue((value) => !value);
   };

   return { value, toggle };
};

export default useToggle;
