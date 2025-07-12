import { isInRange, parseChannel } from '../helpers';

export const isRgb = (value: string | RgbColor): boolean => {
  if (typeof value === 'string') {
    return validateRgbString(value);
  } 
  
  if (typeof value === 'object' && value !== null) {
    return validateRgbObject(value as RgbColor);
  }

  return false;
};

const validateRgbObject = (color: RgbColor): boolean => {
  const { red, green, blue, alpha } = color;

  return (
    isInRange(red, 0, 255) &&
    isInRange(green, 0, 255) &&
    isInRange(blue, 0, 255) &&
    (alpha === undefined || isInRange(alpha, 0, 1))
  );
};

const validateRgbString = (value: string): boolean => {
  const rgbRegex =
    /^rgba?\(\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*[, ]\s*(\d{1,3}|[\d.]+%)\s*(?:[,/]\s*([01]?\.?\d+%?))?\s*\)$/;

  const match = value.match(rgbRegex);
  if (!match) return false;

  const [, r, g, b, a] = match;

  const red = parseChannel(r);
  const green = parseChannel(g);
  const blue = parseChannel(b);

  const isValidRgb = isInRange(red, 0, 255) && isInRange(green, 0, 255) && isInRange(blue, 0, 255);

  if (!isValidRgb) return false;

  if (a !== undefined) {
    let alpha: number;
    if (a.endsWith('%')) {
      alpha = Number(a.slice(0, -1)) / 100;
    } else {
      alpha = Number(a);
    }
    return isInRange(alpha, 0, 1);
  }

  return true;
};
