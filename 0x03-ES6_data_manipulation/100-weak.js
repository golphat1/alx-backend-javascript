/* Export a const instance of WeakMap and name it weakMap */
/* Export a new function named queryAPI*/

export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endpointData = weakMap.get(endpoint);
    if (endpointData >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (endpointData + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
