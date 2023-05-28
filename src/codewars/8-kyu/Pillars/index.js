/**
 * There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same.
 *
 * Your function accepts three arguments:
 *    Number of pillars (≥ 1);
 *    Distance between pillars (10 - 30 meters);
 *    Width of the pillar (10 - 50 centimeters).
 *
 * Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
 *
 * Kata Link:
 *    https://www.codewars.com/kata/5bb0c58f484fcd170700063d
 */

/**
 * Calculates the total distance between pillars in a structure.
 * @param {number} numPillars - The number of pillars.
 * @param {number} pillarDistance - The distance between each pair of pillars.
 * @param {number} pillarWidth - The width of each pillar.
 * @returns {number} The total distance.
 */
export function pillars(numPillars, pillarDistance, pillarWidth) {
  if (numPillars <= 1) {
    return 0;
  }

  var totalPillarWidth = (numPillars - 2) * pillarWidth;
  var totalDistance = (numPillars - 1) * pillarDistance;
  var distanceInCentimeters = totalDistance * 100 + totalPillarWidth;

  return distanceInCentimeters;
}
