export const getFormattedDateString = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayString = day < 10 ? "0" + day : day;
  const monthString = month < 10 ? "0" + month : month;

  return `${dayString}.${monthString}.${year}`;
};

export const getFormattedTimeString = (
  dateString: string,
  withSeconds: boolean = true
): string => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hoursString = hours < 10 ? "0" + hours : hours;
  const minutesString = minutes < 10 ? "0" + minutes : minutes;
  const secondsString = seconds < 10 ? "0" + seconds : seconds;

  return `${hoursString}:${minutesString}` + withSeconds
    ? `:${secondsString}`
    : "";
};

export const getFormattedDateTimeString = (
  dateString: string,
  withSeconds: boolean = true
): string => {
  return (
    getFormattedTimeString(dateString, withSeconds) +
    " - " +
    getFormattedDateString(dateString)
  );
};
