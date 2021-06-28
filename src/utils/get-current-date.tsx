export function getCurrentDate(separator?: string): string {
  const sep = separator ?? ".";
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const dayString = day < 10 ? "0" + day : day;
  const monthString = month < 10 ? "0" + month : month;

  return dayString + sep + monthString + sep + year;
}

export function getCurrentWeekday(): string {
  const now = new Date();
  const dayOfWeak = now.getDay();
  const dayNames = [
    "Montag",
    "Dienstag",
    "Mitwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];

  return dayNames[dayOfWeak - 1];
}

export function addDays(days: number, to: string): Date {
  const toDate = new Date(to);
  const result = new Date(toDate);
  result.setDate(toDate.getDate() + days);

  return result;
}
