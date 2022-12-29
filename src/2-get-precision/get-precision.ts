export const getPrecision = (n: number): number => {
  n = Math.abs(n); //Convert negative to positive number

  const numberPartsByPoint = n.toString().split('.'); //Split number by point
  const numberPartsByHifen = n.toString().split('e-'); //Split number by hifen

  if (numberPartsByPoint[1]) return numberPartsByPoint[1].length;
  if (numberPartsByHifen[1]) return Number(numberPartsByHifen[1]);

  return 0;
};
