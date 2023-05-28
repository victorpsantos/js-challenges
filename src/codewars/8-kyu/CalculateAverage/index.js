/**
 * Write a function which calculates the average of the numbers in a given list.
 *
 * Note: Empty arrays should return 0.
 *
 * Kata Link:
 *    https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
 */

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} array - The input array.
 * @returns {number} The average value.
 */
export function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  const sum = array.reduce((accumulator, value) => accumulator + value, 0);
  const average = sum / array.length;
  return average;
}
