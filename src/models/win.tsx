import { DrawingDate } from '../constants/drawing-date';
import { EntryTypes } from '../constants/entry-type';
import { winLevelFromNumber } from '../constants/win-levels';
import { getNumberOfEquals } from '../utils/get-number-of-equal';
import { LottoDraw } from './lotto-draw';
import { LottoEntry } from './lotto-entry';
import { Tip } from './tip';

export class Win {
  winLevel: string;
  date: Date;
  amount: number;
  winningNumbers: LottoEntry[];
  hasSuperZahl: boolean;

  constructor(tip: Tip, draw: LottoDraw, drawingDate: DrawingDate) {
    const entries: LottoEntry[] = drawingDate === DrawingDate.Wednesday ? draw.wednesday : draw.saturday;

    this.date = new Date(entries[0].date);

    this.winningNumbers = [];

    entries.map((entry: LottoEntry) => {
      if (entry.type === EntryTypes.Normal && tip.isWinning(entry)) {
        this.winningNumbers.push(entry)
      }
      if (entry.type === EntryTypes.Superzahl) {
        this.hasSuperZahl = tip.superNumber === entry.value;
      }
    });

    this.winLevel == winLevelFromNumber(this.winningNumbers.length, this.hasSuperZahl);
  }

}