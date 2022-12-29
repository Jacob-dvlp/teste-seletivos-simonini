export const autoDistribute = (
  total: number,
  parts: number,
  decimalPrecision: number
): Array<number> => {
  const distribuitions: number[] = [];

  for (let i = 0; i < parts; i++) {
    let number = (total / parts).toFixed(decimalPrecision);
    distribuitions.push(Number(number));
  }

  return distribuitions;
};
