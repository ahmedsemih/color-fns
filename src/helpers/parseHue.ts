/**
 * Parses a hue string with optional units and converts it to degrees.
 * Supports deg, rad, grad, and turn units. Unitless values are assumed to be degrees.
 * The function correctly handles negative values and values outside the typical 0-360 range.
 *
 * @param {string} hueString - The hue value string to parse.
 * @returns {number} The hue value in degrees, or NaN if the format is invalid.
 */
export const parseHue = (hueString: string): number => {
  const trimmed = hueString.trim().toLowerCase();
  const match = trimmed.match(/^(-?[\d.]+)(deg|rad|grad|turn)?$/);

  if (!match) return NaN;

  const value = parseFloat(match[1]);
  const unit = match[2];

  if (isNaN(value)) return NaN;

  switch (unit) {
    case 'rad':
      return (value * 180) / Math.PI;
    case 'grad':
      return (value / 400) * 360;
    case 'turn':
      return value * 360;
    default:
      return value;
  }
};
