import { parseHex } from '../parse';
import { hslToHex, rgbToHex } from '../convert';
import { HslColor, RgbColor } from '../types';

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
  if (typeof color === 'object' && color !== null) {
    const isRgb = 'red' in color && 'green' in color && 'blue' in color;
    const isHsl = 'hue' in color && 'saturation' in color && 'lightness' in color;

    if (isRgb) return rgbToHex(color);
    if (isHsl) return hslToHex(color);
  }

  if (typeof color === 'string') {
    const trimmed = color.trim();

    if (trimmed.startsWith('hsl')) return hslToHex(trimmed);
    if (trimmed.startsWith('rgb')) return rgbToHex(trimmed);
    if (trimmed.startsWith('#')) {
      const rgb = parseHex(trimmed);
      return rgbToHex(rgb);
    }
  }

  throw new Error(
    'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
  );
};
