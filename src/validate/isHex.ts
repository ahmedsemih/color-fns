/**
 * Checks if value is a valid hexadecimal color code.
 *
 * It validates 3, 4, 6, and 8-digit hex codes.
 * - 3 digits: #RGB
 * - 4 digits: #RGBA
 * - 6 digits: #RRGGBB
 * - 8 digits: #RRGGBBAA
 *
 * @param {unknown} value - The input to validate.
 * @returns {boolean} - Returns true if the value is a valid hex color code, otherwise false.
 */
export const isHex = (value: unknown): boolean => {
  if (typeof value !== 'string') return false;

  const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
  return hexRegex.test(value);
};
