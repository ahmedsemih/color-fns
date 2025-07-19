import { RgbColor } from '../types';

/**
 * Generates a random RGB color.
 *
 * This function returns an object with `red`, `green`, and `blue` properties,
 * each being a random integer between 0 and 255.
 *
 * @returns {RgbColor} An object with `red`, `green`, and `blue` properties.
 * @example
 * randomRgb(); // { red: 123, green: 45, blue: 67 }
 */
export const randomRgb = (): RgbColor => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    red,
    green,
    blue,
  };
};
