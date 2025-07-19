import { rgbToHex, rgbToHsl, toCss, toRgb } from '../convert';
import { getFormat } from '../helpers';
import { Color } from '../types';

/**
 * Mixes two colors together based on a specified weight.
 *
 * @param color1 - The first color, which can be a string, RgbColor, or HslColor.
 * @param color2 - The second color, which can be a string, RgbColor, or HslColor.
 * @param weight - The weight of the first color in the mix (default is 0.5).
 * @returns The mixed color in the same format as the first color.
 */
export const mix = (color1: Color, color2: Color, weight = 0.5): Color => {
  const format = getFormat(color1);
  const firstRgbColor = toRgb(color1);
  const secondRgbColor = toRgb(color2);
  const hasAlpha = 'alpha' in firstRgbColor || 'alpha' in secondRgbColor;

  const mixedColor = {
    red: Math.round(firstRgbColor.red * weight + secondRgbColor.red * (1 - weight)),
    green: Math.round(firstRgbColor.green * weight + secondRgbColor.green * (1 - weight)),
    blue: Math.round(firstRgbColor.blue * weight + secondRgbColor.blue * (1 - weight)),
    alpha: hasAlpha
      ? (firstRgbColor.alpha ?? 1) * weight + (secondRgbColor.alpha ?? 1) * (1 - weight)
      : undefined,
  };

  if (format === 'rgb') return mixedColor;
  if (format === 'rgbString') return toCss(mixedColor);
  if (format === 'hsl') return rgbToHsl(mixedColor);
  if (format === 'hslString') return toCss(rgbToHsl(mixedColor));
  if (format === 'hex') return rgbToHex(mixedColor);
  return mixedColor;
};
