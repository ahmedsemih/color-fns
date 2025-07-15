import { toCss, toRgb } from '../convert';
import { HslColor, RgbColor } from '../types';

/**
 * Converts any supported color format into a CSS RGB/RGBA string.
 *
 * This function standardizes any color input (hex, HSL, RGB, objects)
 * into an RGB color object, and then formats it as a CSS string.
 *
 * @param {string | HslColor | RgbColor} color - The color to convert.
 * @returns {string} A CSS color string in `rgb()` or `rgba()` format.
 * @throws {Error} If the input color format is not recognized or invalid.
 * @example
 * toRgbString('#ff0000');
 * // 'rgb(255, 0, 0)'
 *
 * toRgbString('hsl(120, 100%, 50%)');
 * // 'rgb(0, 255, 0)'
 * toRgbString({ red: 0, green: 0, blue: 255, alpha: 0.5 });
 * // 'rgba(0, 0, 255, 0.5)'
 */
export const toRgbString = (color: string | HslColor | RgbColor): string => {
  const rgb = toRgb(color);
  return toCss(rgb);
};
