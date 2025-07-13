/**
 * Parses a hue string with optional units and converts it to a normalized degree value [0, 360).
 * Supports deg, rad, grad, and turn units. Unitless values are assumed to be degrees.
 *
 * @param {string} hueString - The hue value string to parse.
 * @returns {number} The normalized hue value in degrees, or NaN if the format is invalid.
 * @example
 * parseHue('450deg');   // 90
 * parseHue('-90deg');   // 270
 * parseHue('1.5turn');  // 180
 */
export const parseHue = (hueString: string): number => {
  const trimmed = hueString.trim().toLowerCase();
  const match = trimmed.match(/^(-?[\d.]+)(deg|rad|grad|turn)?$/);

  if (!match) return NaN;

  const value = parseFloat(match[1]);
  const unit = match[2];

  if (isNaN(value)) return NaN;

  let degrees: number;

  switch (unit) {
    case 'rad':
      degrees = (value * 180) / Math.PI;
      break;
    case 'grad':
      degrees = (value / 400) * 360;
      break;
    case 'turn':
      degrees = value * 360;
      break;
    default:
      degrees = value;
      break;
  }

  return ((degrees % 360) + 360) % 360;
};
