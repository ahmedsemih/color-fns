import { parseRgb } from '../parse';
import { isRgb } from '../validate';

/**
 * Converts an RGB color value to its HSL equivalent.
 *
 * This function accepts an RGB color in either string format (e.g., 'rgb(255, 0, 0)')
 * or as an RgbColor object. It returns an HSL color object with hue, saturation,
 * lightness, and an optional alpha channel.
 *
 * @param {string | RgbColor} color - The RGB color to convert.
 * @returns {HslColor} An object representing the color in HSL format.
 * @throws {Error} If the input color is not a valid RGB format.
 * @example
 * rgbToHsl('rgb(255, 0, 0)');
 * // returns { hue: 0, saturation: 100, lightness: 50, alpha: 1 }
 *
 * rgbToHsl({ red: 0, green: 255, blue: 0, alpha: 0.5 });
 * // returns { hue: 120, saturation: 100, lightness: 50, alpha: 0.5 }
 */
export const rgbToHsl = (color: string | RgbColor): HslColor => {
  if (!isRgb(color)) throw new Error('Invalid RGB color format');

  const rgb = typeof color === 'string' ? parseRgb(color) : color;
  const { red, green, blue, alpha } = rgb;

  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let hue = 0;
  let saturation = 0;
  let lightness = (max + min) / 2;

  if (delta !== 0) {
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r:
        hue = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / delta + 2;
        break;
      case b:
        hue = (r - g) / delta + 4;
        break;
    }
    hue = hue * 60;
  }

  return {
    hue: Math.round(hue),
    saturation: Math.round(saturation * 100),
    lightness: Math.round(lightness * 100),
    alpha: alpha,
  };
};
