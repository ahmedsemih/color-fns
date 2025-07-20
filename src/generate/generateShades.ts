import { hslToHex, hslToRgb, toCss, toHsl } from '../convert';
import { getFormat } from '../helpers';
import { Color, HslColor } from '../types';

/**
 * Generates a series of shades for a given color.
 * The shades are created by decreasing the lightness of the color.
 *
 * @param {Color} color - The base color to generate shades from.
 * @param {number} [count=10] - The number of shades to generate. Default is 10.
 * @returns {Color[]} An array of colors representing the generated shades. Returns colors in the same format as the input color.
 * @throws {Error} If the provided color format is invalid.
 */
export const generateShades = (color: Color, count = 10): Color[] => {
  const format = getFormat(color);
  const shades: HslColor[] = [];
  const { hue, saturation, lightness, alpha } = toHsl(color);
  const decreaseAmount = lightness / count;

  for (let i = 0; i < count; i++) {
    const shade = { hue, saturation, lightness: lightness - i * decreaseAmount, alpha };
    shades.push(shade);
  }

  if (format === 'rgb') return shades.map((shade) => hslToRgb(shade));
  if (format === 'hex') return shades.map((shade) => hslToHex(shade));
  if (format === 'rgbString') return shades.map((shade) => toCss(hslToRgb(shade)));
  if (format === 'hslString') return shades.map((shade) => toCss(shade));
  return shades;
};
