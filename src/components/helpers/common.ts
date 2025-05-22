export const getExpYearsAndMonths = () => {
  const startDate: any = new Date(2022, 10, 2);
  const currentDate: any = new Date();
  const differenceInTime: number = currentDate - startDate;
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  const differenceInMonths = differenceInDays / 30.44;
  const years = Math.floor(differenceInMonths / 12);
  const months = Math.floor(differenceInMonths % 12);
  if (months === 0) {
    return { years };
  } else {
    return { months, years };
  }
};
