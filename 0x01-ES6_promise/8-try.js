// a function that accepts two arguments
// when denominator argument  is equal to 0 throw a new error
// with the message cannot divide by 0
// otherwise return the numerator divided by the denominator

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}
