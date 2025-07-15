import { parseHsl } from '../parse';
import { HslColor, RgbColor } from '../types';
import { isHsl } from '../validate';

/**
 * Converts an HSL color value to its RGB equivalent.
 *
 * This function accepts an HSL color in either string format (e.g., 'hsl(120, 100%, 50%)')
 * or as an HslColor object. It returns an RGB color object with `red`, `green`, `blue`, and an optional `alpha` channel.
 *
 * @param {string | HslColor} color - The HSL color to convert.
 * @returns {RgbColor} An object representing the color in RGB format, including an alpha channel.
 * @throws {Error} If the input color is not a valid HSL format.
 * @example
 * hslToRgb('hsl(0, 100%, 50%)');
 * // returns { red: 255, green: 0, blue: 0, alpha: 1 }
 *
 * hslToRgb({ hue: 120, saturation: 100, lightness: 50, alpha: 0.5 });
 * // returns { red: 0, green: 255, blue: 0, alpha: 0.5 }
 */
export const hslToRgb = (color: string | HslColor): RgbColor => {
  if (!isHsl(color)) throw new Error('Invalid HSL color format');

  const hsl = typeof color === 'string' ? parseHsl(color) : color;

  const { hue, saturation, lightness, alpha } = hsl;

  const l = lightness / 100;
  const s = saturation / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = l - c / 2;

  let r, g, b;

  if (hue >= 0 && hue < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (hue >= 60 && hue < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (hue >= 120 && hue < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (hue >= 180 && hue < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (hue >= 240 && hue < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  return {
    red: Math.round((r + m) * 255),
    green: Math.round((g + m) * 255),
    blue: Math.round((b + m) * 255),
    alpha: alpha ?? undefined,
  };
};
