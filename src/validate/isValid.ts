import { isHex, isRgb, isHsl } from '../validate';

/**
 * Checks if the provided value is a valid color format supported by the library.
 * This function acts as a general validator by checking against Hex, RGB, and HSL formats.
 *
 * @param {unknown} value The value to validate. Can be a color string or a color object.
 * @returns {boolean} Returns `true` if the value is a valid color, otherwise `false`.
 * @example
 * isValid('#ff0000'); // true
 * isValid('rgb(255, 0, 0)'); // true
 * isValid({ hue: 120, saturation: 100, lightness: 50 }); // true
 * isValid('not a color'); // false
 */
export const isValid = (value: unknown): boolean => {
  return isHex(value as any) || isRgb(value as any) || isHsl(value as any);
};
