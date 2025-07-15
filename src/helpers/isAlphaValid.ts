import { isInRange } from './isInRange';

/**
 * Checks if the given alpha value is a valid number or percentage.
 *
 * @param {number|string} alpha - The alpha value to validate.
 * @returns {boolean} Returns `true` if the alpha value is valid, otherwise `false`.
 * @example
 * isAlphaValid(0.5);        // true
 * isAlphaValid('50%');      // true
 * isAlphaValid(1.5);        // false
 * isAlphaValid('150%');     // false
 * isAlphaValid('invalid'); // false
 */
export const isAlphaValid = (alpha: number | string): boolean => {
  if (typeof alpha === 'number') {
    return isInRange(alpha, 0, 1);
  }

  if (typeof alpha === 'string') {
    const alphaValue = parseFloat(alpha);
    if (isNaN(alphaValue)) return false;

    if (alpha.endsWith('%')) {
      return isInRange(alphaValue / 100, 0, 1);
    }

    return isInRange(alphaValue, 0, 1);
  }

  return false;
};
