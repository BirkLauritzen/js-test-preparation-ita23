/**
 * This function returns the last element in an array
 *
 * @param {Array<number>} array - The array to find the last number of
 * @returns {number} - The last number in the array
 *
 * Usage:
 * const lastElement = getLastElement([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
 * console.log(lastElement); // 20
 */
function getLastElement(array) {
    return array[array.length-1]
}
getLastElement([2, 4, 6])

/**
 * This function returns an array of even numbers from the specified start to finish.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} finish - The ending number of the range (inclusive).
 * @returns {Array<number>} - An array containing even numbers from start to finish.
 *
 * Usage:
 * const numbers = returnEvenNumbers(2, 20);
 * // numbers will be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */
function returnEvenNumbers(start, finish) {
    let evenNumbers = [];
    for (let i = start; i <= finish; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}
returnEvenNumbers(2, 10)

/**
 * This function returns a new array with the square of each number from the input array.
 *
 * @param {number} array - Array of numbers.
 * @returns {number} - Array with the square of each number.
 *
 * Usage:
 * const squares = squareArray([1, 2, 3]); // squares will be [1, 4, 9]
 * const anotherSquares = squareArray([-1, -2, 3]); // anotherSquares will be [1, 4, 9]
 */
function squareArray(array) {
    let squared = [];
    for (let i = 0, len = array.length; i < len; i++) {
        squared.push(array[i] * array[i]);
    }
    return squared;
}

squareArray([1, 2, 3])

/**
 * This function returns the maximum number in an array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number} - The maximum number in the array.
 *
 * Usage:
 * const max = findMax([1, 2, 3]); // max will be 3
 * const anotherMax = findMax([-1, -2, 3]); // anotherMax will be 3
 */
function findMax(array) {
   return array.reduce((a, b) => Math.max(a, b), -Infinity);
}

findMax([1, 3, 59, 200, 100])