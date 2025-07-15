import { isInRange } from '../helpers';
import { parseHue, parseAlpha } from '../parse';
import { HslColor } from '../types';

/**
 * Parses an HSL color string into an HslColor object.
 *
 * This function supports modern CSS HSL syntax, including:
 * - `hsl()` and `hsla()` formats.
 * - Comma-separated or space-separated values.
 * - Different units for hue (`deg`, `rad`, `grad`, `turn`). Unitless hue is assumed to be in degrees.
 * - An optional alpha channel, separated by a comma or a slash.
 *
 * The hue value is normalized to the range [0, 360).
 *
 * @param {string} color - The HSL color string to parse.
 * @returns {HslColor} An object with `hue`, `saturation`, `lightness`, and optional `alpha` properties.
 * @throws {Error} If the color string is not a valid HSL format or contains invalid values.
 * @example
 * parseHsl('hsl(120, 100%, 50%)');
 * // { hue: 120, saturation: 100, lightness: 50 }
 * parseHsl('hsla(480, 100%, 50%, 0.5)');
 * // { hue: 120, saturation: 100, lightness: 50, alpha: 0.5 }
 * parseHsl('hsl(-90 100% 50%)');
 * // { hue: 270, saturation: 100, lightness: 50 }
 * parseHsl('hsl(0.5turn 100% 50% / 50%)');
 * // { hue: 180, saturation: 100, lightness: 50, alpha: 0.5 }
 */
export const parseHsl = (color: string): HslColor => {
  if (typeof color !== 'string') throw new Error('Invalid HSL color format');

  const hslRegex =
    /^hsla?\(\s*(-?[\d.]+(?:deg|rad|grad|turn)?)\s*[, ]\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*(?:[,/]\s*(-?[\d.]+%?))?\s*\)$/i;

  const match = color.match(hslRegex);
  if (!match) throw new Error('Invalid HSL color format');

  const [, h, s, l, a] = match;

  const hue = parseHue(h);
  const saturation = parseFloat(s);
  const lightness = parseFloat(l);

  if (
    isNaN(hue) ||
    isNaN(saturation) ||
    isNaN(lightness) ||
    !isInRange(saturation, 0, 100) ||
    !isInRange(lightness, 0, 100)
  ) {
    throw new Error('Invalid HSL color values');
  }

  if (a !== undefined) {
    const alpha = parseAlpha(a);
    return { hue, saturation, lightness, alpha };
  }

  return { hue, saturation, lightness, alpha: 1 };
};
