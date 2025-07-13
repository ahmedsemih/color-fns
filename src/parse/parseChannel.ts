/**
 * Parses an RGB channel value from a string to its corresponding 0-255 numeric value.
 * It handles both numeric strings (e.g., "128") and percentage strings (e.g., "50%").
 *
 * @param {string} channel - The channel value string to parse. Can be a number or a percentage.
 * @returns {number} The numeric representation of the channel value.
 */
export const parseChannel = (channel: string): number => {
  const trimmedChannel = channel.trim();

  if (!trimmedChannel) return NaN;

  if (trimmedChannel.endsWith('%')) {
    const value = Number(trimmedChannel.slice(0, -1));
    return (value / 100) * 255;
  }

  return Number(trimmedChannel);
};
