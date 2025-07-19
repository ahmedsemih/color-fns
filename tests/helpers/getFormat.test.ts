import { describe, it, expect } from 'vitest';
import { getFormat } from '../../src/helpers';

describe('getFormat', () => {
  it('should return "hex" for hex color strings', () => {
    expect(getFormat('#ff5733')).toBe('hex');
    expect(getFormat('#ff5733ff')).toBe('hex');
  });

  it('should return "rgbString" for rgb color strings', () => {
    expect(getFormat('rgb(255, 87, 51)')).toBe('rgbString');
    expect(getFormat('rgba(255, 87, 51, 1)')).toBe('rgbString');
  });

  it('should return "hslString" for hsl color strings', () => {
    expect(getFormat('hsl(9, 100%, 60%)')).toBe('hslString');
    expect(getFormat('hsl(9, 100%, 60%, 1)')).toBe('hslString');
  });

  it('should return "rgb" for RgbColor objects', () => {
    expect(getFormat({ red: 255, green: 87, blue: 51 })).toBe('rgb');
    expect(getFormat({ red: 255, green: 87, blue: 51, alpha: 1 })).toBe('rgb');
  });

  it('should return "hsl" for HslColor objects', () => {
    expect(getFormat({ hue: 9, saturation: 100, lightness: 60 })).toBe('hsl');
    expect(getFormat({ hue: 9, saturation: 100, lightness: 60, alpha: 1 })).toBe('hsl');
  });

  it('should throw an error for invalid formats', () => {
    expect(() => getFormat('invalid')).toThrowError('Invalid color format');
    expect(() => getFormat({} as any)).toThrowError('Invalid color format');
    expect(() => getFormat([] as any)).toThrowError('Invalid color format');
    expect(() => getFormat(null as any)).toThrowError('Invalid color format');
  });
});
