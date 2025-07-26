import { Color } from '../types';
import { lighten } from './lighten';

/**
 * Adjusts the darkness of a color by decreasing its lightness.
 *
 * @param {Color} color - The color to adjust.
 * @param {number} amount - The amount to decrease the lightness by.
 * @returns {Color} The color with adjusted darkness.
 */
export const darken = (color: Color, amount: number): Color => {
  return lighten(color, -amount);
};
