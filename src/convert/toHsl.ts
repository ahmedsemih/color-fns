import { parseHsl } from '../parse';
import { hexToHsl, rgbToHsl } from '../convert';
import { HslColor, RgbColor } from '../types';
import { getFormat } from '../helpers';

/**
 * Converts any supported color format into an HslColor object.
 *
 * This function serves as a universal converter, accepting various color formats
 * and standardizing them into the HslColor object format. It can handle:
 * - Hexadecimal strings (e.g., '#ff0000')
 * - RGB and HSL color strings (e.g., 'rgb(255, 0, 0)', 'hsl(120, 100%, 50%)')
 * - RgbColor objects
 * - HslColor objects (which are returned directly)
 *
 * @param {string | RgbColor | HslColor} color - The color to convert, in string or object format.
 * @returns {HslColor} An object representing the color in HSL format.
 * @throws {Error} If the input color format is not recognized or invalid.
 * @example
 * toHsl('#ff0000');
 * // returns { hue: 0, saturation: 100, lightness: 50, alpha: 1 }
 *
 * toHsl('rgb(0, 255, 0)');
 * // returns { hue: 120, saturation: 100, lightness: 50, alpha: 1 }
 *
 * toHsl({ red: 0, green: 0, blue: 255 });
 * // returns { hue: 240, saturation: 100, lightness: 50, alpha: 1 }
 */
export const toHsl = (color: string | RgbColor | HslColor): HslColor => {
  const format = getFormat(color);

  if (format === 'hsl') return color as HslColor;
  if (format === 'rgb') return rgbToHsl(color as RgbColor);
  if (format === 'hex') return hexToHsl(color as string);
  if (format === 'hslString') return parseHsl(color as string);
  if (format === 'rgbString') return rgbToHsl(color as string);

  throw new Error('Invalid color format');
};
