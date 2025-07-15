import { describe, it, expect } from 'vitest';
import { hslToHex } from '../../src';

describe('hslToHex', () => {
  it('should convert HSL string to hex', () => {
    expect(hslToHex('hsl(0, 100%, 50%)')).toBe('#FF0000');
    expect(hslToHex('hsl(120, 100%, 50%)')).toBe('#00FF00');
    expect(hslToHex('hsl(240, 100%, 50%)')).toBe('#0000FF');
    expect(hslToHex('hsl(60, 100%, 50%)')).toBe('#FFFF00');
  });

  it('should convert HSL object to hex', () => {
    expect(hslToHex({ hue: 120, saturation: 100, lightness: 50 })).toBe('#00FF00');
    expect(hslToHex({ hue: 300, saturation: 100, lightness: 50 })).toBe('#FF00FF');
    expect(hslToHex({ hue: 240, saturation: 100, lightness: 50 })).toBe('#0000FF');
    expect(hslToHex({ hue: 0, saturation: 0, lightness: 100 })).toBe('#FFFFFF');
  });

  it('should handle alpha channel in HSL string', () => {
    expect(hslToHex('hsla(240, 100%, 50%, 0.5)')).toBe('#0000FF80');
    expect(hslToHex('hsla(0, 100%, 50%, 0.75)')).toBe('#FF0000BF');
    expect(hslToHex('hsla(120, 100%, 50%, 0.25)')).toBe('#00FF0040');
    expect(hslToHex('hsla(60, 100%, 50%, 0.5)')).toBe('#FFFF0080');
  });

  it('should handle alpha channel in HSL object', () => {
    expect(hslToHex({ hue: 60, saturation: 100, lightness: 50, alpha: 0.75 })).toBe('#FFFF00BF');
    expect(hslToHex({ hue: 240, saturation: 100, lightness: 50, alpha: 0.5 })).toBe('#0000FF80');
    expect(hslToHex({ hue: 0, saturation: 100, lightness: 50, alpha: 0.25 })).toBe('#FF000040');
    expect(hslToHex({ hue: 120, saturation: 100, lightness: 50, alpha: 1 })).toBe('#00FF00');
  });

  it('should throw an error for invalid HSL format', () => {
    expect(() => hslToHex('invalid')).toThrow('Invalid HSL color format');
    expect(() => hslToHex({} as any)).toThrow('Invalid HSL color format');
    expect(() => hslToHex({ hue: 0, saturation: -1, lightness: 50 })).toThrow(
      'Invalid HSL color format'
    );
    expect(() => hslToHex({ hue: 0, saturation: 100, lightness: 101 })).toThrow(
      'Invalid HSL color format'
    );
    expect(() => hslToHex({ hue: 0, saturation: 100, lightness: 50, alpha: 1.5 })).toThrow(
      'Invalid HSL color format'
    );
    expect(() => hslToHex(null as any)).toThrow('Invalid HSL color format');
  });
});
