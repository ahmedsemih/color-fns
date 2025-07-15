import { isInRange } from '../helpers';
import { parseAlpha, parseChannel } from '../parse';
import { RgbColor } from '../types';

/**
 * Parses an RGB color string into an RgbColor object.
 *
 * This function supports modern CSS RGB syntax, including:
 * - `rgb()` and `rgba()` formats.
 * - Comma-separated or space-separated values.
 * - Channel values as numbers (0-255) or percentages (0%-100%).
 * - An optional alpha channel, separated by a comma or a slash.
 *
 * @param {string} color - The RGB color string to parse.
 * @returns {RgbColor} An object with `red`, `green`, `blue`, and `alpha` properties.
 * @throws {Error} If the color string is not a valid RGB format or contains invalid values.
 * @example
 * parseRgb('rgb(255, 0, 0)');
 * // { red: 255, green: 0, blue: 0, alpha: 1 }
 * parseRgb('rgba(0, 100%, 0, 0.5)');
 * // { red: 0, green: 255, blue: 0, alpha: 0.5 }
 * parseRgb('rgb(0 128 255 / 50%)');
 * // { red: 0, green: 128, blue: 255, alpha: 0.5 }
 */
export const parseRgb = (color: string): RgbColor => {
  if (typeof color !== 'string') {
    throw new Error('Invalid RGB color format');
  }

  const rgbRegex =
    /^rgba?\(\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*(?:[,/]\s*(-?[\d.]+%?))?\s*\)$/i;

  const match = color.match(rgbRegex);
  if (!match) {
    throw new Error('Invalid RGB color format');
  }

  const [, r, g, b, a] = match;

  const red = parseChannel(r);
  const green = parseChannel(g);
  const blue = parseChannel(b);

  if (!isInRange(red, 0, 255) || !isInRange(green, 0, 255) || !isInRange(blue, 0, 255)) {
    throw new Error('RGB values must be between 0 and 255');
  }

  const alpha = a !== undefined ? parseAlpha(a) : 1;

  return {
    red,
    green,
    blue,
    alpha,
  };
};
