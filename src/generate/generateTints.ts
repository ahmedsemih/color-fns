import { hslToHex, hslToRgb, toCss, toHsl } from '../convert';
import { getFormat } from '../helpers';
import { Color, HslColor } from '../types';

/**
 * Generates a series of tints for a given color.
 * The tints are created by increasing the lightness of the color.
 *
 * @param {Color} color - The base color to generate tints from.
 * @param {number} [count=10] - The number of tints to generate. Default is 10.
 * @returns {Color[]} An array of colors representing the generated tints. Returns colors in the same format as the input color.
 * @throws {Error} If the provided color format is invalid.
 */
export const generateTints = (color: Color, count = 10): Color[] => {
  const format = getFormat(color);
  const tints: HslColor[] = [];
  const { hue, saturation, lightness, alpha } = toHsl(color);
  const increaseAmount = (100 - lightness) / count;

  for (let i = 0; i < count; i++) {
    const tint = { hue, saturation, lightness: lightness + i * increaseAmount, alpha };
    tints.push(tint);
  }

  if (format === 'rgb') return tints.map((tint) => hslToRgb(tint));
  if (format === 'hex') return tints.map((tint) => hslToHex(tint));
  if (format === 'rgbString') return tints.map((tint) => toCss(hslToRgb(tint)));
  if (format === 'hslString') return tints.map((tint) => toCss(tint));
  return tints;
};
