import { parseHex } from '../parse';
import { rgbToHsl } from '../convert';

export const hexToHsl = (color: string): HslColor => {
  const rgb = parseHex(color);
  return rgbToHsl(rgb);
};
