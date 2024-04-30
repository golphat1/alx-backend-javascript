/* returns a map of groceries with the following items (name, quantity)*/

const groceriesList = () => {
  const map = new Map();
  map.set('Apples', 10);
  map.set('Tomatoes', 10);
  map.set('Pasta', 1);
  map.set('Rice', 1);
  map.set('Banana', 5);
  return map;
};

export default groceriesList;
