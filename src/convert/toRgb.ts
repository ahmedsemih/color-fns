import { parseRgb } from '../parse';
import { isHsl, isRgb } from '../validate';
import { hexToRgb, hslToRgb } from '../convert';

/**
 * Converts any supported color format into an RgbColor object.
 *
 * This function serves as a universal converter, accepting various color formats
 * and standardizing them into the RgbColor object format. It can handle:
 * - Hexadecimal strings (e.g., '#ff0000')
 * - RGB and HSL color strings (e.g., 'rgb(255, 0, 0)', 'hsl(120, 100%, 50%)')
 * - HslColor objects
 * - RgbColor objects (which are returned directly)
 *
 * @param {string | RgbColor | HslColor} color - The color to convert, in string or object format.
 * @returns {RgbColor} An object representing the color in RGB format.
 * @throws {Error} If the input color format is not recognized or invalid.
 * @example
 * toRgb('#ff0000');
 * // returns { red: 255, green: 0, blue: 0, alpha: 1 }
 *
 * toRgb('hsl(120, 100%, 50%)');
 * // returns { red: 0, green: 255, blue: 0, alpha: 1 }
 *
 * toRgb({ hue: 0, saturation: 100, lightness: 50 });
 * // returns { red: 255, green: 0, blue: 0, alpha: 1 }
 */
export const toRgb = (color: string | RgbColor | HslColor): RgbColor => {
  if (typeof color === 'object' && color !== null) {
    if (isRgb(color as RgbColor)) return color as RgbColor;
    if (isHsl(color as HslColor)) return hslToRgb(color as HslColor);
  }

  if (typeof color === 'string') {
    const trimmed = color.trim().toLowerCase();

    if (trimmed.startsWith('#')) return hexToRgb(trimmed);
    if (trimmed.startsWith('hsl')) return hslToRgb(trimmed);
    if (trimmed.startsWith('rgb')) return parseRgb(trimmed);
  }

  throw new Error(
    'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
  );
};
