export const formatDate = (date: Date, delimiter = "-"): string => {
   const day = date.getDate().toString().padStart(2, "0");
   const month = (date.getMonth() + 1).toString().padStart(2, "0");
   const year = date.getFullYear();

   return [day, month, year].join(delimiter);
};

export const getLastDay = (year: number, month: number): number => {
   return new Date(year, month, 0).getDate();
};
