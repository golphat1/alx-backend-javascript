/* a function that returns a boolean if all the elements in the array exist within the set.*/
/* accepts two arguments: a set (Set) and an array (Array).*/
const hasValuesFromArray = (set, array) => array.every((value) => set.has(value));

export default hasValuesFromArray;
