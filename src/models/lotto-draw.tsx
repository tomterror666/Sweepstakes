import { DrawingDate } from "../constants/drawing-date";
import { WinLevels } from "../constants/win-levels";
import { LottoEntry } from "./lotto-entry";
import { Tip } from "./tip";
import { Win } from "./win";
import { getDateFromString } from "../utils/get-date-from-string";

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
    this.buildDrawingDates();

    const wins: Win[] = [];
    const wednesdayWin = new Win(tip, this, DrawingDate.Wednesday);
    const saturdayWin = new Win(tip, this, DrawingDate.Saturday);

    if (wednesdayWin.winLevel != WinLevels.NOTHING) {
      wednesdayWin.winningTip = tip;
      wins.push(wednesdayWin);
    }

    if (saturdayWin.winLevel != WinLevels.NOTHING) {
      saturdayWin.winningTip = tip;
      wins.push(saturdayWin);
    }

    return wins;
  };

  buildDrawingDates = () => {
    if (this.dates.length === 0) {
      return;
    }

    this.wednesday = [];
    this.saturday = [];

    this.dates.map((entry: LottoEntry) => {
      const entryDate = getDateFromString(entry.date);
      const weekday = entryDate.getDay();

      switch (weekday) {
        case 3: // Wednesday
          this.wednesday.push(entry);
          break;
        case 6: // Saturday
          this.saturday.push(entry);
          break;
        default:
          break;
      }
    });
  };
}
