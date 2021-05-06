import { LottoEntry } from "./lotto-entry";

export class Tip {
  startDate: Date;
  duration: number;
  numberOne: number;
  numberTwo: number;
  numberThree: number;
  numberFour: number;
  numberFife: number;
  numberSix: number;
  additionalNumber: number;
  superNumber: number;

  isWinning = (entry: LottoEntry): boolean => {
    return this.numberOne === entry.value ||
           this.numberTwo === entry.value ||
           this.numberThree === entry.value ||
           this.numberFour === entry.value ||
           this.numberFife === entry.value ||
           this.numberSix === entry.value;
  }
} 
