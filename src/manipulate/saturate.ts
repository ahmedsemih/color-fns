import { hslToHex, hslToRgb, toCss, toHsl } from '../convert';
import { getFormat } from '../helpers';
import { Color } from '../types';

/**
 * Adjusts the saturation of a color.
 *
 * @param {Color} color - The color to adjust.
 * @param {number} amount - The amount to adjust the saturation by.
 * @returns {Color} The color with adjusted saturation.
 */
export const saturate = (color: Color, amount: number): Color => {
  const format = getFormat(color);
  const hslColor = toHsl(color);

  if ((amount >= 0 && amount <= 1) || (amount >= -1 && amount <= 0)) {
    hslColor.saturation = Math.max(0, Math.min(100, hslColor.saturation + 100 * amount));
  } else {
    hslColor.saturation = Math.max(0, Math.min(100, hslColor.saturation + amount));
  }

  if (format === 'rgb') return hslToRgb(hslColor);
  if (format === 'rgbString') return toCss(hslToRgb(hslColor));
  if (format === 'hex') return hslToHex(hslColor);
  if (format === 'hslString') return toCss(hslColor);
  return hslColor;
};
