import { parseHex } from '../parse';
import { hslToHex, rgbToHex } from '../convert';
import { HslColor, RgbColor } from '../types';
import { getFormat } from '../helpers';

/**
 * Converts any supported color format into a CSS hexadecimal string.
 *
 * This function serves as a universal converter, accepting various color formats
 * and standardizing them into a consistent hex string format. It can handle:
 * - Hexadecimal strings (including shorthand, e.g., '#f00')
 * - RGB and HSL color strings (e.g., 'rgb(255, 0, 0)', 'hsl(120, 100%, 50%)')
 * - RgbColor and HslColor objects
 *
 * The output is always a normalized, uppercase, 6 or 8-digit hex string.
 *
 * @param {string | RgbColor | HslColor} color - The color to convert, in string or object format.
 * @returns {string} A normalized, uppercase hexadecimal color string (e.g., '#FF0000' or '#FF000080').
 * @throws {Error} If the input color format is not recognized or invalid.
 * @example
 * toHex('hsl(120, 100%, 50%)');
 * // returns '#00FF00'
 *
 * toHex({ red: 255, green: 0, blue: 0, alpha: 0.5 });
 * // returns '#FF000080'
 *
 * toHex('#f0c'); // demonstrates shorthand normalization
 * // returns '#FF00CC'
 */
export const toHex = (color: string | RgbColor | HslColor): string => {
  const format = getFormat(color);

  if (format === 'rgb') return rgbToHex(color as RgbColor);
  if (format === 'hsl') return hslToHex(color as HslColor);
  if (format === 'rgbString') return rgbToHex(color as string);
  if (format === 'hslString') return hslToHex(color as string);
  if (format === 'hex') {
    const rgb = parseHex(color as string);
    return rgbToHex(rgb);
  }

  throw new Error('Invalid color format');
};
