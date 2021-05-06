import { LottoDraw } from './lotto-draw';
import { Tip } from "./tip";
import { Win } from "./win";

export class LottoYear {
  year: number;
  dates: LottoDraw[];

  constructor(year: number) {
    this.year = year;
    this.dates = [];
  }

  addWeek = (week: LottoDraw) => {
    this.dates.push(week);
  }

  getWeek = (week: number): LottoDraw | undefined => {
    return this.dates.find((value) => {
      return value.weekNumber === week;
    })
  };

  checkTip = (tip: Tip): Win[] => {
    const wins: Win[] = [];

    this.dates.map((week: LottoDraw) => week.checkTip(tip)
      .map((win: Win) => wins.push(win)));

    return wins;
  }
}
