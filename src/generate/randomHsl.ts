import { HslColor } from '../types';

/**
 * Generates a random HSL color.
 *
 * This function returns an object with `hue`, `saturation`, and `lightness` properties,
 * where:
 * - `hue` is a random integer between 0 and 359,
 * - `saturation` is a random integer between 0 and 100,
 * - `lightness` is a random integer between 0 and 100.
 *
 * @returns {HslColor} An object with `hue`, `saturation`, and `lightness` properties.
 * @example
 * randomHsl(); // { hue: 210, saturation: 50, lightness: 75 }
 */
export const randomHsl = (): HslColor => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 101);
  const lightness = Math.floor(Math.random() * 101);

  return {
    hue,
    saturation,
    lightness,
  };
};
