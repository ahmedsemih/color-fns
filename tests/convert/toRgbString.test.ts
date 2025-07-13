import { describe, it, expect } from 'vitest';
import { toRgbString } from '../../src';

describe('toRgbString', () => {
  it('should convert hex strings to an RGB string', () => {
    expect(toRgbString('#ff0000')).toBe('rgb(255, 0, 0)');
    expect(toRgbString('#f00')).toBe('rgb(255, 0, 0)');
    expect(toRgbString('#00ff0080')).toBe('rgba(0, 255, 0, 0.5)');
    expect(toRgbString('#0f08')).toBe('rgba(0, 255, 0, 0.53)');
    expect(toRgbString('#000')).toBe('rgb(0, 0, 0)');
    expect(toRgbString('#ffffff')).toBe('rgb(255, 255, 255)');
  });

  it('should convert HSL strings to an RGB string', () => {
    expect(toRgbString('hsl(120, 100%, 50%)')).toBe('rgb(0, 255, 0)');
    expect(toRgbString('hsla(0, 100%, 50%, 0.5)')).toBe('rgba(255, 0, 0, 0.5)');
    expect(toRgbString('hsl(0, 0%, 0%)')).toBe('rgb(0, 0, 0)');
    expect(toRgbString('hsl(0, 0%, 100%)')).toBe('rgb(255, 255, 255)');
  });

  it('should convert HSL objects to an RGB string', () => {
    expect(toRgbString({ hue: 240, saturation: 100, lightness: 50 })).toBe('rgb(0, 0, 255)');
    expect(toRgbString({ hue: 0, saturation: 0, lightness: 100, alpha: 0.25 })).toBe(
      'rgba(255, 255, 255, 0.25)'
    );
  });

  it('should handle existing RGB strings', () => {
    expect(toRgbString('rgb(0, 0, 255)')).toBe('rgb(0, 0, 255)');
    expect(toRgbString('rgba(0, 0, 255, 0.75)')).toBe('rgba(0, 0, 255, 0.75)');
  });

  it('should handle existing RGB objects', () => {
    expect(toRgbString({ red: 128, green: 0, blue: 128 })).toBe('rgb(128, 0, 128)');
    expect(toRgbString({ red: 128, green: 0, blue: 128 })).toBe('rgb(128, 0, 128)');
    expect(toRgbString({ red: 128, green: 0, blue: 128, alpha: 0 })).toBe('rgba(128, 0, 128, 0)');
  });

  it('should throw an error for out-of-range values', () => {
    expect(() => toRgbString('rgb(300, 0, 0)')).toThrow('must be between 0 and 255');
    expect(() => toRgbString('hsl(120, 110%, 50%)')).toThrow('Invalid HSL color format');
    expect(() => toRgbString('rgba(0, 0, 0, 2)')).toThrow('Alpha value must be between 0 and 1');
  });

  it('should throw an error for invalid formats', () => {
    expect(() => toRgbString('not a color')).toThrow('Invalid color format');
    expect(() => toRgbString('rgb(255, 0)')).toThrow('Invalid RGB color format');
    expect(() => toRgbString('#12345')).toThrow('Invalid Hex color format.');
    expect(() => toRgbString('hsl(120, 50%)')).toThrow('Invalid HSL color format');
    expect(() => toRgbString({ r: 255, g: 0, b: 0 } as any)).toThrow('Invalid color format');
    expect(() => toRgbString({} as any)).toThrow('Invalid color format');
    expect(() => toRgbString(null as any)).toThrow('Invalid color format');
    expect(() => toRgbString(12345 as any)).toThrow('Invalid color format');
    expect(() => toRgbString(undefined as any)).toThrow('Invalid color format');
  });
});
