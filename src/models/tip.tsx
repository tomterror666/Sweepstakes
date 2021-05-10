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

  constructor(another: Tip) {
    this.startDate = !another ? null : another.startDate;
    this.duration = !another ? null : another.duration;
    this.numberOne = !another ? null : another.numberOne;
    this.numberTwo = !another ? null : another.numberTwo;
    this.numberThree = !another ? null : another.numberThree;
    this.numberFour = !another ? null : another.numberFour;
    this.numberFife = !another ? null : another.numberFife;
    this.numberSix = !another ? null : another.numberSix;
    this.additionalNumber = !another ? null : another.additionalNumber;
    this.superNumber = !another ? null : another.superNumber;
  }

  static constructTip(numbers: number[], superNumber: number, startDate: Date = new Date(), duration: number = 28): Tip {
    const newTip = new Tip(null);

    newTip.startDate = startDate;
    newTip.duration = duration;
    newTip.numberOne = numbers[0];
    newTip.numberTwo = numbers[1];
    newTip.numberThree = numbers[2];
    newTip.numberFour = numbers[3];
    newTip.numberFife = numbers[4];
    newTip.numberSix = numbers[5];
    newTip.superNumber = superNumber;
    newTip.additionalNumber = -1;

    return newTip;
  }

  isWinning = (entry: LottoEntry): boolean => {
    return this.numberOne === entry.value ||
           this.numberTwo === entry.value ||
           this.numberThree === entry.value ||
           this.numberFour === entry.value ||
           this.numberFife === entry.value ||
           this.numberSix === entry.value;
  }
} 
