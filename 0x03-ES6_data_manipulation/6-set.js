// Function to return a Set from an array
// It accepts an argument (Array, of any kind of element)
function setFromArray(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array.');
  }

  // Create a new Set from the array and return it
  const set = new Set(array);
  return set;
}

export default setFromArray;
