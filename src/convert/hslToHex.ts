import { HslColor } from '../types';
import { hslToRgb } from './hslToRgb';

/**
 * Converts an HSL color value to its hexadecimal equivalent.
 *
 * This function first converts the HSL color to RGB, then formats the RGB
 * values into a hex string. It returns a 6-digit hex string for opaque colors
 * and an 8-digit hex string for colors with transparency.
 *
 * @param {string | HslColor} color - The HSL color to convert, as a string or object.
 * @returns {string} The hexadecimal color string (e.g., '#FF0000' or '#00FF0080').
 * @throws {Error} If the input color is not a valid HSL format.
 * @example
 * hslToHex('hsl(0, 100%, 50%)');
 * // returns '#FF0000'
 *
 * hslToHex({ hue: 120, saturation: 100, lightness: 50, alpha: 0.5 });
 * // returns '#00FF0080'
 */
export const hslToHex = (color: string | HslColor): string => {
  const rgb = hslToRgb(color);
  const { red, green, blue, alpha = 1 } = rgb;

  const hex = `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();

  if (alpha === 1) return hex;

  const alphaHex = Math.round(alpha * 255);
  return `${hex}${toHex(alphaHex)}`.toUpperCase();
};

const toHex = (c: number) => c.toString(16).padStart(2, '0');
