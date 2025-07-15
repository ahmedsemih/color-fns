import { parseHex } from '../parse';
import { rgbToHsl } from '../convert';

/**
 * Converts a hexadecimal color string to its HSL equivalent.
 * It supports 3, 4, 6, and 8-digit hex formats.
 *
 * @param {string} color - The hex color string to convert (e.g., '#ff0000').
 * @returns {HslColor} An object representing the color in HSL format.
 * @throws {Error} If the input string is not a valid hex color format.
 * @example
 * hexToHsl('#ff0000');
 * // returns { hue: 0, saturation: 100, lightness: 50, alpha: 1 }
 *
 * hexToHsl('#00ff0080');
 * // returns { hue: 120, saturation: 100, lightness: 50, alpha: 0.5 }
 */
export const hexToHsl = (color: string): HslColor => {
  const rgb = parseHex(color);
  return rgbToHsl(rgb);
};
