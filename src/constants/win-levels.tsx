export const WinLevels = {
  NOTHING: 'nothing',
  TWO_WITH_SUPER: 'twoWithSuper',
  THREE: 'three',
  THREE_WITH_SUPER: 'threeWithSuperr',
  FOUR: 'four',
  FOUR_WITH_SUPER: 'fourWithSuper',
  FIVE: 'five',
  FIVE_WITH_SUPER: 'fifeWithSuper',
  SIX: 'six',
  JACKPOT: 'jackpot'
}

export const winLevelFromNumber = (number: number, hasSuperZahl: boolean):string => {
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
}