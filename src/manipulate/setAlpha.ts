import { rgbToHex, rgbToHsl, toCss, toHsl, toRgb } from '../convert';
import { getFormat } from '../helpers';
import { Color } from '../types';

/**
 * Sets the alpha (opacity) of a color.
 *
 * @param {Color} color - The color to adjust.
 * @param {number} alpha - The alpha value to set (0 to 1).
 * @returns {Color} The color with the adjusted alpha.
 */
export const setAlpha = (color: Color, alpha: number): Color => {
  const format = getFormat(color);
  const rgbColor = toRgb(color);
  const rgbaColor = { ...rgbColor, alpha: Math.max(0, Math.min(1, alpha)) };

  if (format === 'hex') return rgbToHex(rgbaColor);
  if (format === 'hsl') return toHsl(rgbaColor);
  if (format === 'hslString') return toCss(rgbToHsl(rgbaColor));
  if (format === 'rgbString') return toCss(rgbaColor);
  return rgbaColor;
};
