/* a function  that returns a new ArrayBuffer with an Int8 value at a specific position. */
/* accept three arguments: length (Number), position (Number), and value (Number).*/
/* If adding the value is not possible the error Position outside range should be thrown.*/

const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  if (position > int8Array.length) throw new Error('Position outside range');
  int8Array[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
