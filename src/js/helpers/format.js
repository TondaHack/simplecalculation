export const numberify = (value = 0) => parseFloat(value);
export const roundToDecimal = (value = 0, decimal = 2) => numberify(value).toFixed(decimal);

export default {
  numberify,
  roundToDecimal,
};
