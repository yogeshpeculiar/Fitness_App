export const validateResponseCode = (code) => {
  return Math.floor(code / 100) === 2;
};