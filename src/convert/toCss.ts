/**
 * Converts an RgbColor or HslColor object into a CSS-compatible string.
 *
 * This function detects the color format (RGB or HSL) and generates the appropriate
 * CSS function string. It will use the `rgba()` or `hsla()` format if an alpha
 * channel is present and not equal to 1.
 *
 * @param {RgbColor | HslColor} color - The color object to convert.
 * @returns {string} A CSS color string (e.g., 'rgb(255, 0, 0)' or 'hsla(120, 100%, 50%, 0.5)').
 * @throws {Error} If the input is not a valid RgbColor or HslColor object.
 * @example
 * toCss({ red: 255, green: 0, blue: 0 });
 * // returns 'rgb(255, 0, 0)'
 *
 * toCss({ hue: 120, saturation: 100, lightness: 50, alpha: 0.5 });
 * // returns 'hsla(120, 100%, 50%, 0.5)'
 */
export const toCss = (color: RgbColor | HslColor): string => {
  if (typeof color !== 'object' || color === null) {
    throw new Error('Invalid color format. Expected an RGB or HSL object.');
  }

  if ('red' in color && 'green' in color && 'blue' in color) {
    const { red, green, blue, alpha } = color;

    if (alpha === undefined) {
      return `rgb(${red}, ${green}, ${blue})`;
    }
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  if ('hue' in color && 'saturation' in color && 'lightness' in color) {
    const { hue, saturation, lightness, alpha } = color;

    if (alpha === undefined) {
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  }

  throw new Error('Invalid color format. Expected an RGB or HSL object.');
};
