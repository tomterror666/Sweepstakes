export const getNumberOfEquals = (one: any[], two: any[]): number => {
  return one.filter((value) => two.includes(value)).length;
};
