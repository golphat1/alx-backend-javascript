// Function to return a string of set values that start with a specific string
// It accepts two arguments: a set (Set) and a startString (String)
function cleanSet(set, startString) {
  // Check if the input types are valid and startString is not empty
  if (
    !(set instanceof Set) ||
    typeof startString !== 'string' ||
    startString.length === 0
  ) {
    return '';
  }

  const string = [];

  // Iterate over the set values
  for (const item of set) {
    // Check if the item starts with the specified startString
    if (typeof item === 'string' && item.startsWith(startString)) {
      // Append the part of the item after the startString to the string array
      string.push(item.slice(startString.length));
    }
  }
  
  // Join the string array elements with '-' and return
  return string.join('-');
}

export default cleanSet;
