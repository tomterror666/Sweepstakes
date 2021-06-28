import { EntryTypes } from "../constants/entry-type";

export class LottoEntry {
  date: string;
  id: number;
  value: number;
  variable: string;
  type: EntryTypes;

  constructor(date: string, id: number, value: number, variable: string) {
    this.date = date;
    this.id = id;
    this.value = value;
    this.variable = variable;

    this.type =
      variable.toLowerCase() === "superzahl"
        ? EntryTypes.Superzahl
        : variable.toLowerCase() === "zusatzzahl"
        ? EntryTypes.Zusatzzahl
        : EntryTypes.Normal;
  }

  getEntryYear = (): number => {
    return (
      Number(this.date[6]) * 1000 +
      Number(this.date[7]) * 100 +
      Number(this.date[8]) * 10 +
      Number(this.date[9])
    );
  };
}
