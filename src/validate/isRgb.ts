import { isAlphaValid, isInRange } from '../helpers';
import { parseChannel } from '../parse';
import { RgbColor } from '../types';

/**
 * Checks if value is a valid RGB color.
 *
 * - For strings, it validates `rgb()` and `rgba()` formats, including values with
 *   or without percentages, and comma or space separators.
 * - For objects, it checks for `red`, `green`, and `blue` properties within the
 *   0-255 range, and an optional `alpha` property within the 0-1 range.
 *
 * @param {unknown} value - The input to validate.
 * @returns {boolean} Returns `true` if the value is a valid RGB color, otherwise `false`.
 * @example
 * isRgb('rgb(255, 0, 0)');       // true
 * isRgb('rgba(0, 255, 0, 50%)'); // true
 * isRgb({ red: 0, green: 0, blue: 255 }); // true
 * isRgb('rgb(300, 0, 0)');       // false
 * isRgb({ red: 255, green: 0 }); // false (missing blue)
 */
export const isRgb = (value: unknown): boolean => {
  if (typeof value === 'string') {
    return validateRgbString(value);
  }

  if (typeof value === 'object' && value !== null) {
    return validateRgbObject(value as RgbColor);
  }

  return false;
};

const validateRgbObject = (color: RgbColor): boolean => {
  const { red, green, blue, alpha } = color;

  return (
    isInRange(red, 0, 255) &&
    isInRange(green, 0, 255) &&
    isInRange(blue, 0, 255) &&
    (alpha === undefined || isInRange(alpha, 0, 1))
  );
};

const validateRgbString = (value: string): boolean => {
  const rgbRegex =
    /^rgba?\(\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*(?:[,/]\s*([01]?\.?\d+%?))?\s*\)$/;

  const match = value.match(rgbRegex);
  if (!match) return false;

  const [, r, g, b, a] = match;

  const red = parseChannel(r);
  const green = parseChannel(g);
  const blue = parseChannel(b);

  const isValidRgb = isInRange(red, 0, 255) && isInRange(green, 0, 255) && isInRange(blue, 0, 255);
  if (!isValidRgb) return false;

  if (a !== undefined) return isAlphaValid(a);

  return true;
};
