/* that returns a string of all the set values that start with a specific string*/
/* accepts two arguments: a set (Set) and a startString (String).*/
function cleanSet(set, startString) {
  const string = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      string.push(item.slice(startString.length));
    }
  }
  return string.join('-');
}

export default cleanSet;
