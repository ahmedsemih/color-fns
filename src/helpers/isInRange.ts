/**
 * Checks if a given number is within a specified range (inclusive).
 *
 * @param {number} value - The number to check.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {boolean} - Returns true if the value is within the range, otherwise false.
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};
