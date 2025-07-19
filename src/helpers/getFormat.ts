import { Color, SupportedFormats } from '../types';

/**
 * Determines the format of the given color.
 *
 * @param color - The color to check, which can be a string, RgbColor, or HslColor.
 * @returns A string indicating the format of the color ('hex', 'rgbString', 'hslString', 'rgb', 'hsl').
 * @throws An error if the color format is invalid.
 */

export const getFormat = (color: Color): SupportedFormats => {
  if (typeof color === 'string') {
    if (color.startsWith('#')) return 'hex';
    if (color.startsWith('rgb')) return 'rgbString';
    if (color.startsWith('hsl')) return 'hslString';
  }

  if (typeof color === 'object' && color !== null) {
    if ('red' in color && 'green' in color && 'blue' in color) return 'rgb';
    if ('hue' in color && 'saturation' in color && 'lightness' in color) return 'hsl';
  }

  throw new Error(`Invalid color format`);
};
