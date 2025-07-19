/**
 * Generates a random hexadecimal color.
 *
 * @returns {string} A random hexadecimal color string.
 * @example
 * randomHex(); // "#1a2b3c"
 */
export const randomHex = (): string => {
  return `#${randomValue()}${randomValue()}${randomValue()}`;
};

const randomValue = () => {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
};
