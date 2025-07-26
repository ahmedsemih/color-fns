import { hslToHex, hslToRgb, toCss, toHsl } from '../convert';
import { getFormat } from '../helpers';
import { Color } from '../types';

/**
 * Converts a color to grayscale by setting its saturation to 0.
 * The output format is determined by the input color's format.
 *
 * @param {Color} color - The input color to be converted to grayscale.
 * @returns {Color} - The grayscale color in the same format as the input.
 */
export const grayscale = (color: Color): Color => {
  const format = getFormat(color);
  const hslColor = toHsl(color);
  hslColor.saturation = 0;

  if (format === 'rgb') return hslToRgb(hslColor);
  if (format === 'rgbString') return toCss(hslToRgb(hslColor));
  if (format === 'hex') return hslToHex(hslColor);
  if (format === 'hslString') return toCss(hslColor);
  return hslColor;
};
