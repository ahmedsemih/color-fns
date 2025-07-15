import { toCss, toHsl } from '../convert';

/**
 * Converts any supported color format into a CSS HSL/HSLA string.
 *
 * This function standardizes any color input (hex, HSL, RGB, objects)
 * into an HSL color object, and then formats it as a CSS string.
 *
 * @param {string | RgbColor | HslColor} color - The color to convert.
 * @returns {string} A CSS color string in `hsl()` or `hsla()` format.
 * @throws {Error} If the input color format is not recognized or invalid.
 * @example
 * toHslString('#ff0000');
 * // 'hsl(0, 100%, 50%)'
 *
 * toHslString('rgb(0, 255, 0)');
 * // 'hsl(120, 100%, 50%)'
 *
 * toHslString({ red: 0, green: 0, blue: 255, alpha: 0.5 });
 * // 'hsla(240, 100%, 50%, 0.5)'
 */
export const toHslString = (color: string | RgbColor | HslColor): string => {
  const hsl = toHsl(color);
  return toCss(hsl);
};
