// function that uses ES6'S for...of operator

export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
    for (const value of array) {
        newArray.push(appendString + value);
    }
    return newArray;
}
