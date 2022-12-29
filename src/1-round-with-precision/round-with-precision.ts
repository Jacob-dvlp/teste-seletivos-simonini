export const roundWithPrecision = (
  value: number,
  decimalPrecision: number
): number => {
  const precision = parseFloat(value.toFixed(decimalPrecision));
  return precision;
};
