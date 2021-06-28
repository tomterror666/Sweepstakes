import { LottoEntry } from "./lotto-entry";
import { LottoYear } from "./lotto-year";
import { Tip } from "./tip";
import { Win } from "./win";
import { WinLevels } from "../constants/win-levels";

export class Lottory {
  years: LottoYear[];

  constructor() {
    this.years = [];
  }

  addYear(year: LottoYear) {
    this.years.push(year);
  }

  getYear = (year: number): LottoYear | undefined => {
    return this.years.find((value) => {
      return value.year === year;
    });
  };

  get numberOfYears() {
    return this.years.length;
  }

  get firstYear() {
    return this.years[0].year;
  }

  get numberOfDrawings() {
    let result: number = 0;

    this.years.map((year: LottoYear) => {
      result += year.numberOfWeeks;
    });

    return result;
  }

  static reverseTrimmedDateString = (dateString: string): string => {
    return (
      dateString[6] +
      dateString[7] +
      dateString[8] +
      dateString[9] +
      dateString[3] +
      dateString[4] +
      dateString[0] +
      dateString[1]
    );
  };

  static dateStringCompare = (first: string, second: string): number => {
    if (
      Lottory.reverseTrimmedDateString(first) <
      Lottory.reverseTrimmedDateString(second)
    ) {
      return -1;
    } else if (
      Lottory.reverseTrimmedDateString(first) >
      Lottory.reverseTrimmedDateString(second)
    ) {
      return 1;
    }
    return 0;
  };

  static sortEntries = (first: LottoEntry, second: LottoEntry) => {
    const dateCompare = Lottory.dateStringCompare(first.date, second.date);
    if (dateCompare != 0) {
      return dateCompare;
    }

    if (first.variable < second.variable) {
      return -1;
    } else if (first.variable > second.variable) {
      return 1;
    }

    if (first.id < second.id) {
      return -1;
    } else if (first.id > second.id) {
      return 1;
    }

    return first.value < second.value ? -1 : 1;
  };

  checkTip = (tip: Tip): Win[] => {
    const wins: Win[] = [];

    this.years.map((year: LottoYear) =>
      year.checkTip(tip).map((win: Win) => wins.push(win))
    );

    return wins;
  };

  currentAmount = (tips: Tip[]): number => {
    const wins: Win[] = [];

    tips.map((tip: Tip) => {
      this.checkTip(tip).map((win: Win) => {
        if (win.winLevel !== WinLevels.NOTHING) {
          wins.push(win);
        }
      });
    });

    return wins.length;
  };
}
