import { rgbToHex, rgbToHsl, toCss, toRgb } from '../convert';
import { getFormat } from '../helpers';
import { Color } from '../types';

/**
 * Inverts the given color.
 * @param color - The color to invert.
 * @returns The inverted color in the same format as the input.
 *
 * @example
 * invert('#ff0000'); // '#00ffff'
 * invert('rgb(255, 0, 0)'); // 'rgb(0, 255, 255)'
 * invert({ red: 255, green: 0, blue: 0 }); // { red: 0, green: 255, blue: 255 }
 */
export const invert = (color: Color): Color => {
  const format = getFormat(color);
  const rgbColor = toRgb(color);

  const invertedColor = {
    red: 255 - rgbColor.red,
    green: 255 - rgbColor.green,
    blue: 255 - rgbColor.blue,
    alpha: rgbColor.alpha,
  };

  if (format === 'hsl') return rgbToHsl(invertedColor);
  if (format === 'hslString') return toCss(rgbToHsl(invertedColor));
  if (format === 'hex') return rgbToHex(invertedColor);
  if (format === 'rgbString') return toCss(invertedColor);
  return invertedColor;
};
