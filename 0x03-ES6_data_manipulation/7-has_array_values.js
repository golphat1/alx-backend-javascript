// Function to return a boolean indicating if all elements in the array exist within the set
// It accepts two arguments: a set (Set) and an array (Array)
function hasValuesFromArray(set, array) {
  // Check if the input types are valid
  if (!(set instanceof Set) || !Array.isArray(array)) {
    return false;
  }

  // Check if all elements in the array exist within the set
  const check = array.every((item) => set.has(item));
  return check;
}

export default hasValuesFromArray;
