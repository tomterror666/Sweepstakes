import axios from 'axios';
import { LottoEntry } from '../models/lotto-entry';
import { LottoWeek } from '../models/lotto-week';
import { LottoYear } from '../models/lotto-year';
import { Lottory } from '../models/lottory';

interface ILottoEntry {
  date: string;
  id: number;
  value: number;
  variable: string;
}


export const readResults = async (countingYear: number): Promise<Lottory | null> => {

  let readLottory: Lottory = null;

  await axios.get(`https://johannesfriedrich.github.io/LottoNumberArchive/Lottonumbers_tidy_complete.json`)
    .then((response) => {
      const data: [ILottoEntry] = response.data;
      const entries = [];

      data.map((entry: ILottoEntry) => {
        const lottoEntry = new LottoEntry(entry.date, entry.id, entry.value, entry.variable);

        entries.push(lottoEntry);
      })

      entries.sort(Lottory.sortEntries);

      const lottory = new Lottory;

      entries.map((entry: LottoEntry) => {
        const entryYear = entry.getEntryYear();
        
        if (entryYear < countingYear) {
          return;
        }

        let year = lottory.getYear(entryYear);
        if (!year) {
          year = new LottoYear(entry.getEntryYear());

          lottory.addYear(year);
        }

        let week = year.getWeek(entry.id);
        if (!week) {
          week = new LottoWeek(entry.id);

          year.addWeek(week);
        }

        week.addEntry(entry);
      });

      console.log(34567, lottory.firstYear);
      readLottory = lottory;
    })
    .catch((error) => {
      console.log(error);

      readLottory = null;
    })

    return readLottory;
};