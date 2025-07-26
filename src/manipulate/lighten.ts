import { hslToHex, hslToRgb, toCss, toHsl } from '../convert';
import { getFormat } from '../helpers';
import { Color } from '../types';

/**
 * Adjusts the lightness of a color.
 *
 * @param {Color} color - The color to adjust.
 * @param {number} amount - The amount to adjust the lightness by.
 * @returns {Color} The color with adjusted lightness.
 */
export const lighten = (color: Color, amount: number): Color => {
  const format = getFormat(color);
  const hslColor = toHsl(color);

  if ((amount >= 0 && amount <= 1) || (amount >= -1 && amount <= 0)) {
    hslColor.lightness = Math.max(0, Math.min(100, hslColor.lightness + 100 * amount));
  } else {
    hslColor.lightness = Math.max(0, Math.min(100, hslColor.lightness + amount));
  }

  if (format === 'rgb') return hslToRgb(hslColor);
  if (format === 'rgbString') return toCss(hslToRgb(hslColor));
  if (format === 'hex') return hslToHex(hslColor);
  if (format === 'hslString') return toCss(hslColor);
  return hslColor;
};
