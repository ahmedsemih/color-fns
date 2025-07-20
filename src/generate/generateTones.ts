import { hslToHex, hslToRgb, toCss, toHsl } from '../convert';
import { getFormat } from '../helpers';
import { Color, HslColor } from '../types';

/**
 * Generates a series of tones for a given color.
 * The tones are created by decreasing the saturation of the color.
 *
 * @param {Color} color - The base color to generate tones from.
 * @param {number} [count=10] - The number of tones to generate. Default is 10.
 * @returns {Color[]} An array of colors representing the generated tones. Returns colors in the same format as the input color.
 * @throws {Error} If the provided color format is invalid.
 */
export const generateTones = (color: Color, count = 10): Color[] => {
  const format = getFormat(color);
  const tones: HslColor[] = [];
  const { hue, saturation, lightness, alpha } = toHsl(color);
  const decreaseAmount = saturation / count;

  for (let i = 0; i < count; i++) {
    tones.push({ hue, saturation: saturation - i * decreaseAmount, lightness, alpha });
  }

  if (format === 'rgb') return tones.map((tone) => hslToRgb(tone));
  if (format === 'hex') return tones.map((tone) => hslToHex(tone));
  if (format === 'rgbString') return tones.map((tone) => toCss(hslToRgb(tone)));
  if (format === 'hslString') return tones.map((tone) => toCss(tone));
  return tones;
};
