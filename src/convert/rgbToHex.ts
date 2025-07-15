import { parseRgb } from '../parse';
import { isRgb } from '../validate';

/**
 * Converts an RGB color value to its hexadecimal equivalent.
 *
 * This function accepts an RGB color in either string format (e.g., 'rgb(255, 0, 0)')
 * or as an RgbColor object. It returns a 6-digit hex string for opaque colors
 * and an 8-digit hex string (with alpha) for transparent colors.
 *
 * @param {string | RgbColor} color - The RGB color to convert.
 * @returns {string} The hexadecimal color string (e.g., '#FF0000' or '#FF000080').
 * @throws {Error} If the input color is not a valid RGB format.
 * @example
 * rgbToHex('rgb(255, 0, 0)');
 * // returns '#FF0000'
 *
 * rgbToHex({ red: 0, green: 0, blue: 255, alpha: 0.5 });
 * // returns '#0000FF80'
 */
export const rgbToHex = (color: string | RgbColor): string => {
  if (!isRgb(color)) throw new Error('Invalid RGB color format');

  const rgb = typeof color === 'string' ? parseRgb(color) : color;
  const { red, green, blue, alpha = 1 } = rgb;

  const hex = `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();

  if (alpha === 1) return hex;

  const alphaHex = Math.round(alpha * 255);
  return `${hex}${toHex(alphaHex)}`.toUpperCase();
};

const toHex = (c: number) => c.toString(16).padStart(2, '0');
