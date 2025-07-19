import { describe, it, expect } from 'vitest';
import { toHex } from '../../src';

describe('toHex', () => {
  it('should convert HSL strings to a hex string', () => {
    expect(toHex('hsl(0, 100%, 50%)')).toBe('#FF0000');
    expect(toHex('hsla(120, 100%, 50%, 0.5)')).toBe('#00FF0080');
    expect(toHex('hsl(0, 0%, 100%)')).toBe('#FFFFFF');
    expect(toHex('hsl(240, 100%, 50%)')).toBe('#0000FF');
  });

  it('should convert RGB strings to a hex string', () => {
    expect(toHex('rgb(0, 255, 255)')).toBe('#00FFFF');
    expect(toHex('rgba(0, 0, 255, 0.5)')).toBe('#0000FF80');
    expect(toHex('rgb(255, 0, 0)')).toBe('#FF0000');
    expect(toHex('rgba(255, 255, 0, 0.75)')).toBe('#FFFF00BF');
  });

  it('should normalize existing hex strings', () => {
    expect(toHex('#ff0000')).toBe('#FF0000');
    expect(toHex('#f00')).toBe('#FF0000');
    expect(toHex('#0f08')).toBe('#00FF0087');
    expect(toHex('#0000FF')).toBe('#0000FF');
  });

  it('should convert HslColor objects to a hex string', () => {
    expect(toHex({ hue: 240, saturation: 100, lightness: 50 })).toBe('#0000FF');
    expect(toHex({ hue: 60, saturation: 100, lightness: 50, alpha: 0.25 })).toBe('#FFFF0040');
    expect(toHex({ hue: 0, saturation: 100, lightness: 50, alpha: 1 })).toBe('#FF0000');
    expect(toHex({ hue: 120, saturation: 100, lightness: 50, alpha: 0.5 })).toBe('#00FF0080');
  });

  it('should convert RgbColor objects to a hex string', () => {
    expect(toHex({ red: 128, green: 0, blue: 128 })).toBe('#800080');
    expect(toHex({ red: 128, green: 0, blue: 128, alpha: 1 })).toBe('#800080');
    expect(toHex({ red: 128, green: 0, blue: 128, alpha: 0 })).toBe('#80008000');
    expect(toHex({ red: 255, green: 255, blue: 255, alpha: 0.5 })).toBe('#FFFFFF80');
  });

  it('should throw an error for invalid inputs', () => {
    expect(() => toHex('invalid-color')).toThrow('Invalid color format');
    expect(() => toHex('rgb(255, 0)')).toThrow('Invalid RGB color format');
    expect(() => toHex('#12345')).toThrow('Invalid Hex color format');
    expect(() => toHex({ r: 255, g: 0, b: 0 } as any)).toThrow('Invalid color format');
    expect(() => toHex({} as any)).toThrow('Invalid color format');
    expect(() => toHex(null as any)).toThrow('Invalid color format');
    expect(() => toHex(12345 as any)).toThrow('Invalid color format');
    expect(() => toHex(undefined as any)).toThrow('Invalid color format');
  });
});
