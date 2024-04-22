// function that uses ES6'S for...of operator

export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array.indexOf(value);
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
  }
