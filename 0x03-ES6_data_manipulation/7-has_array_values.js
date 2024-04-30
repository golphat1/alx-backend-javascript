/* a function that returns a boolean if all the elements in the array exist within the set.*/
/* accepts two arguments: a set (Set) and an array (Array).*/
function hasValuesFromArray(set, array) {
  const check = array.every((item) => set.has(item));
  return check;
}

export default hasValuesFromArray;
