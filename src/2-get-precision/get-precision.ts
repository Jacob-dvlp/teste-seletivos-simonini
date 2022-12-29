export const getPrecision = (n: number): number => {
  n = Math.abs(n); //Convert negative to positive number
  const valueReturn = 0 //return;

  const numberPartsByPoint = n.toString().split('.');
  if (numberPartsByPoint[1]){
    return numberPartsByPoint[1].length
  };
  
  const numberPartsByHifen = n.toString().split('e-'); 
  if (numberPartsByHifen[1]) {
    return Number(numberPartsByHifen[1])
  };

  return valueReturn;
};
