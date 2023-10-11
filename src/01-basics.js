/**
 * This function adds two numbers.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @returns {number} - The sum of the two numbers.
 *
 * Usage:
 * const result = add(2, 3); // result will be 5
 * const anotherResult = add(-1, 1); // anotherResult will be 0
 */
function add(a, b) {
    return a + b
}
add(2, 3)
/**
 * This function returns the length of the provided string.
 *
 * @param {string} value - A string whose length needs to be determined.
 * @returns {number} - The length of the string.
 *
 * Usage:
 * const result = determineLength("Hello"); // result will be 5
 * const anotherResult = determineLength("AB"); // anotherResult will be 2
 */
function determineLength(value) {
    return value.length
}
determineLength("Hej med dig")

/**
 * This function concatenates two strings with a specified delimiter.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @param {string} delimiter - The delimiter to be placed between the two strings.
 * @returns {string} - The concatenated string.
 *
 * Usage:
 * const result = concatenateWithDelimiter("Hello", "World", ", "); // result will be "Hello, World"
 */
function concatenateWithDelimiter(a, b, delimiter) {
    return concatenate = a + delimiter + b
}

concatenateWithDelimiter("hej", "med", "-")
