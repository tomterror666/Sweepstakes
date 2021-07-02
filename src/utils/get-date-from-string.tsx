export const getDateFromString = (input: string): Date => {
  const dateParts = input.split(".");

  if (dateParts.length != 3) {
    return null;
  }

  const day = Number(dateParts[0]);
  const month = Number(dateParts[1]) - 1;
  const year = Number(dateParts[2]);

  if (day < 0 || day > 31 || month < 0 || month > 11) {
    return null;
  }

  return new Date(year, month, day);
};
