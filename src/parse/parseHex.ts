import { RgbColor } from '../types';

/**
 * Parses a hexadecimal color string into an RgbColor object.
 *
 * This function supports 3, 4, 6, and 8-digit hex formats with a leading '#'.
 * - #RGB
 * - #RGBA
 * - #RRGGBB
 * - #RRGGBBAA
 *
 * @param {string} color - The hex color string to parse.
 * @returns {RgbColor} An object with `red`, `green`, `blue`, and `alpha` properties.
 * @throws {Error} If the color string is not a valid hex format.
 * @example
 * parseHex('#f00');    // { red: 255, green: 0, blue: 0, alpha: 1 }
 * parseHex('#ff0000'); // { red: 255, green: 0, blue: 0, alpha: 1 }
 * parseHex('#ff000080'); // { red: 255, green: 0, blue: 0, alpha: 0.5 }
 */
export const parseHex = (color: string): RgbColor => {
  if (typeof color !== 'string') {
    throw new Error('Invalid Hex color format.');
  }

  const hexRegex = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
  const match = color.match(hexRegex);

  if (!match) {
    throw new Error('Invalid Hex color format.');
  }

  let hex = match[1];

  if (hex.length === 3 || hex.length === 4) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  let alpha = 1;
  if (hex.length === 8) {
    const alphaHex = parseInt(hex.substring(6, 8), 16);
    alpha = Number((alphaHex / 255).toFixed(2));
  }

  return {
    red,
    green,
    blue,
    alpha,
  };
};
