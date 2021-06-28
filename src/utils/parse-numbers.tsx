import { Lottory } from "../models/lottory";
import { LottoEntry } from "../models/lotto-entry";
import { LottoDraw } from "../models/lotto-draw";
import { LottoYear } from "../models/lotto-year";

interface ILottoEntry {
  date: string;
  id: number;
  value: number;
  variable: string;
}

export const parseNumbers = (allNumbers: [], startingYear: number): Lottory => {
  let readLottory: Lottory = null;

  const data: ILottoEntry[] = allNumbers;
  const entries = [];

  data.map((entry: ILottoEntry) => {
    const lottoEntry = new LottoEntry(
      entry.date,
      entry.id,
      entry.value,
      entry.variable
    );

    entries.push(lottoEntry);
  });

  entries.sort(Lottory.sortEntries);

  const lottory = new Lottory();

  entries.map((entry: LottoEntry) => {
    const entryYear = entry.getEntryYear();

    if (entryYear < startingYear) {
      return;
    }

    let year = lottory.getYear(entryYear);
    if (!year) {
      year = new LottoYear(entry.getEntryYear());

      lottory.addYear(year);
    }

    let week = year.getWeek(entry.id);
    if (!week) {
      week = new LottoDraw(entry.id);

      year.addWeek(week);
    }

    week.addEntry(entry);
  });

  readLottory = lottory;

  return readLottory;
};
