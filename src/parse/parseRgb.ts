import { isInRange } from '../helpers';
import { parseAlpha, parseChannel } from '../parse';

export const parseRgb = (color: string): RgbColor => {
  if (typeof color !== 'string') {
    throw new Error('Invalid RGB color format');
  }

  const rgbRegex =
    /^rgba?\(\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*[, ]\s*(-?[\d.]+%?)\s*(?:[,/]\s*(-?[\d.]+%?))?\s*\)$/i;

  const match = color.match(rgbRegex);
  if (!match) {
    throw new Error('Invalid RGB color format');
  }

  const [, r, g, b, a] = match;

  const red = parseChannel(r);
  const green = parseChannel(g);
  const blue = parseChannel(b);

  if (!isInRange(red, 0, 255) || !isInRange(green, 0, 255) || !isInRange(blue, 0, 255)) {
    throw new Error('RGB values must be between 0 and 255');
  }

  const alpha = a !== undefined ? parseAlpha(a) : 1;

  return {
    red,
    green,
    blue,
    alpha,
  };
};
