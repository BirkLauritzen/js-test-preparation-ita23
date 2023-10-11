/**
 * This function returns the next even number after the given number.
 *
 * @param {number} n - The number.
 * @returns {number} - The next even number after the given number.
 *
 * Usage:
 * const nextEven = getNextEven(3); // nextEven will be 4
 * const anotherNextEven = getNextEven(8); // anotherNextEven will be 10
 */

function getNextEven(n) {
    if (n % 2 === 0) {
        return n+2;
    }
    else {
        return n+1;
    }
}
(getNextEven(10))

/**
 * This function checks if a number is a multiple of another number.
 *
 * @param {number} n - The number to check.
 * @param {number} m - The number to check divisibility against.
 * @returns {boolean} - True if n is a multiple of m, false otherwise.
 *
 * Usage:
 * const isMultiple = isMultipleOf(10, 2); // isMultiple will be true because 2 can be divided with 10
 * const notMultiple = isMultipleOf(10, 3); // notMultiple will be false
 */

function isMultipleOf(n, m) {
    return Math.round(n / m) / (1 / m) === n;
}

isMultipleOf(10, 3)

/**
 * This function reverses a string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 *
 * Usage:
 * const reversed = reverseString('hello'); // reversed will be 'olleh'
 * const anotherReversed = reverseString('world'); // anotherReversed will be 'dlrow'
 */

function reverseString(str) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    return reverseArray.join("")
}
reverseString("hej")