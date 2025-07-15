import { parseHex } from '../parse';
import { RgbColor } from '../types';

/**
 * Converts a hexadecimal color string to its RGB equivalent.
 * This is a wrapper around the parseHex function.
 *
 * @param {string} hex - The hex color string to convert (e.g., '#ff0000').
 * @returns {RgbColor} An object representing the color in RGB format.
 * @throws {Error} If the input string is not a valid hex color format.
 */
export const hexToRgb = (hex: string): RgbColor => {
  return parseHex(hex);
};
