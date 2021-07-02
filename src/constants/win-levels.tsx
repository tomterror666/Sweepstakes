export const WinLevels = {
  NOTHING: "nothing",
  TWO_WITH_SUPER: "twoWithSuper",
  THREE: "three",
  THREE_WITH_SUPER: "threeWithSuperr",
  FOUR: "four",
  FOUR_WITH_SUPER: "fourWithSuper",
  FIVE: "five",
  FIVE_WITH_SUPER: "fifeWithSuper",
  SIX: "six",
  JACKPOT: "jackpot",
};

export const winLevelFromNumber = (
  number: number,
  hasSuperZahl: boolean
): string => {
  switch (number) {
    case 0:
    case 1:
      return WinLevels.NOTHING;
    case 2:
      return hasSuperZahl ? WinLevels.TWO_WITH_SUPER : WinLevels.NOTHING;
    case 3:
      return hasSuperZahl ? WinLevels.THREE_WITH_SUPER : WinLevels.THREE;
    case 4:
      return hasSuperZahl ? WinLevels.FOUR_WITH_SUPER : WinLevels.FOUR;
    case 5:
      return hasSuperZahl ? WinLevels.FIVE_WITH_SUPER : WinLevels.FIVE;
    case 6:
      return hasSuperZahl ? WinLevels.JACKPOT : WinLevels.SIX;
    default:
      return WinLevels.NOTHING;
  }
};

export const readableWinLevel = (level): string => {
  switch (level) {
    case WinLevels.TWO_WITH_SUPER:
      return "Zweier mit Superzahl";
    case WinLevels.THREE:
      return "Dreier";
    case WinLevels.THREE_WITH_SUPER:
      return "Drieer mit Superzahl";
    case WinLevels.FOUR:
      return "Vierer";
    case WinLevels.FOUR_WITH_SUPER:
      return "Vierer mit Superzahl";
    case WinLevels.FIVE:
      return "Fünfer";
    case WinLevels.FIVE_WITH_SUPER:
      return "Fünfer mit Superzahl";
    case WinLevels.SIX:
      return "Sechser";
    case WinLevels.JACKPOT:
      return "JACKPOT!";
    case WinLevels.NOTHING:
    default:
      return "Leider nichts gewonnen...";
  }
};
