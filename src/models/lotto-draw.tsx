import { DrawingDate } from "../constants/drawing-date";
import { WinLevels } from "../constants/win-levels";
import { LottoEntry } from "./lotto-entry";
import { Tip } from "./tip";
import { Win } from "./win";

export class LottoDraw {
  weekNumber: number;
  dates: LottoEntry[];
  wednesday: LottoEntry[];
  saturday: LottoEntry[];

  constructor(weekNumber: number) {
    this.weekNumber = weekNumber;
    this.dates = [];
  }

  addEntry = (entry: LottoEntry) => {
    this.dates.push(entry);
  };

  checkTip = (tip: Tip): Win[] => {
    const wins: Win[] = [];

    this.buildDrawingDates();

    const wednesdayWin = new Win(tip, this, DrawingDate.Wednesday);

    if (wednesdayWin.winLevel != WinLevels.NOTHING) {
      wednesdayWin.winningTip = tip;
      wins.push(wednesdayWin);
    }

    const saturdayWin = new Win(tip, this, DrawingDate.Saturday);

    if (saturdayWin.winLevel != WinLevels.NOTHING) {
      saturdayWin.winningTip = tip;
      wins.push(saturdayWin);
    }

    return wins;
  };

  buildDrawingDates = () => {
    const firstEntries: LottoEntry[] = [];
    const secondEntries: LottoEntry[] = [];
    let firstDate: Date = null;

    this.dates.map((entry: LottoEntry) => {
      const entryDate = new Date(entry.date);

      if (firstDate === null || firstDate === entryDate) {
        firstDate = entryDate;

        firstEntries.push(entry);
      } else {
        secondEntries.push(entry);
      }
    });

    this.wednesday = firstEntries;
    this.saturday = secondEntries;
  };
}
