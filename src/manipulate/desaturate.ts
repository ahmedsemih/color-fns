import { Color } from '../types';
import { saturate } from './saturate';

/**
 * Adjusts the saturation of a color by decreasing it.
 *
 * @param {Color} color - The color to adjust.
 * @param {number} amount - The amount to decrease the saturation by. Can be a percentage (0 to 1) or an absolute value.
 * @returns {Color} The color with adjusted saturation.
 */
export const desaturate = (color: Color, amount: number): Color => {
  return saturate(color, -amount);
};
