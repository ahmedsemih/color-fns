import { isInRange, isAlphaValid } from '../helpers';
import { parseHue } from '../parse';
import { HslColor } from '../types';

/**
 * Checks if a value is a valid HSL color, supporting both string and object formats.
 *
 * - For strings, it validates `hsl()` and `hsla()` formats, including values with
 *   different hue units (`deg`, `rad`, `grad`, `turn`), comma or space separators,
 *   and an optional alpha channel.
 * - For objects, it checks for `hue` (0-360), `saturation` (0-100), and `lightness` (0-100)
 *   properties, and an optional `alpha` property (0-1).
 *
 * @param {string | HslColor} value - The string or object to validate.
 * @returns {boolean} Returns `true` if the value is a valid HSL color, otherwise `false`.
 * @example
 * isHsl('hsl(120, 100%, 50%)');       // true
 * isHsl('hsla(240, 100%, 50%, 0.5)'); // true
 * isHsl({ hue: 0, saturation: 0, lightness: 100 }); // true
 * isHsl('hsl(400, 100%, 50%)');       // false (hue out of range)
 * isHsl({ hue: 120, saturation: 50 }); // false (missing lightness)
 */
export const isHsl = (value: string | HslColor): boolean => {
  if (typeof value === 'string') {
    return validateHslString(value);
  }

  if (typeof value === 'object' && value !== null) {
    return validateHslObject(value as HslColor);
  }

  return false;
};

const validateHslObject = (color: HslColor): boolean => {
  const { hue, saturation, lightness, alpha } = color;

  return (
    isInRange(hue, 0, 360) &&
    isInRange(saturation, 0, 100) &&
    isInRange(lightness, 0, 100) &&
    (alpha === undefined || isInRange(alpha, 0, 1))
  );
};

const validateHslString = (value: string): boolean => {
  const hslRegex =
    /^hsla?\(\s*(-?[\d.]+(?:deg|rad|grad|turn)?)\s*[, ]\s*([\d.]+%?)\s*[, ]\s*([\d.]+%?)\s*(?:[,/]\s*([\d.]+%?))?\s*\)$/i;

  const match = value.match(hslRegex);
  if (!match) return false;

  const [, h, s, l, a] = match;

  const hue = parseHue(h);
  if (isNaN(hue)) return false;

  const saturation = parseFloat(s);
  if (isNaN(saturation) || !isInRange(saturation, 0, 100)) {
    return false;
  }

  const lightness = parseFloat(l);
  if (isNaN(lightness) || !isInRange(lightness, 0, 100)) {
    return false;
  }

  if (a !== undefined) return isAlphaValid(a);

  return true;
};
