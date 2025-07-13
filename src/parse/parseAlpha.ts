import { isInRange } from '../helpers/isInRange';

/**
 * Parses and validates a string or number into a valid alpha value (0-1).
 * Throws an error if the value is invalid or out of range.
 *
 * @param {string | number} alpha - The alpha value to parse.
 * @returns {number} The numeric alpha value between 0 and 1.
 */
export const parseAlpha = (alpha: string | number): number => {
  if (typeof alpha === 'number') {
    if (!isInRange(alpha, 0, 1)) {
      throw new Error('Alpha value must be between 0 and 1');
    }
    return alpha;
  }

  if (typeof alpha === 'string') {
    const trimmed = alpha.trim();
    let value: number;

    if (trimmed.endsWith('%')) {
      const percentValue = Number(trimmed.slice(0, -1));
      value = percentValue / 100;
    } else {
      value = Number(trimmed);
    }

    if (isNaN(value)) {
      throw new Error(`Invalid alpha value: "${alpha}"`);
    }

    if (!isInRange(value, 0, 1)) {
      throw new Error('Alpha value must be between 0 and 1');
    }

    return value;
  }

  throw new Error('Invalid alpha value format');
};
