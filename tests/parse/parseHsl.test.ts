import { describe, it, expect } from 'vitest';
import { parseHsl } from '../../src';

describe('parseHsl', () => {
  it('should parse valid HSL strings', () => {
    expect(parseHsl('hsl(0, 100%, 50%)')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(parseHsl('hsl(120, 50%, 75%)')).toEqual({
      hue: 120,
      saturation: 50,
      lightness: 75,
      alpha: 1,
    });
    expect(parseHsl('hsl(240deg, 100%, 50%)')).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(parseHsl('hsl(100grad, 100%, 50%)')).toEqual({
      hue: 90,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(parseHsl('hsl(0.3turn, 60%, 45% / 0.7)')).toEqual({
      hue: 108,
      saturation: 60,
      lightness: 45,
      alpha: 0.7,
    });
    expect(parseHsl('hsl(0deg, 80%, 50% / 25%)')).toEqual({
      hue: 0,
      saturation: 80,
      lightness: 50,
      alpha: 0.25,
    });
    expect(parseHsl('hsla(0, 100%, 50%, 0.5)')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
    expect(parseHsl('hsla(120, 50%, 75%, 0.75)')).toEqual({
      hue: 120,
      saturation: 50,
      lightness: 75,
      alpha: 0.75,
    });
  });

  it('should throw an error for invalid HSL strings', () => {
    expect(() => parseHsl('hsl(120, 100%)')).toThrow('Invalid HSL color format');
    expect(() => parseHsl('invalid string')).toThrow('Invalid HSL color format');
    expect(() => parseHsl(null as any)).toThrow('Invalid HSL color format');
    expect(() => parseHsl(123 as any)).toThrow('Invalid HSL color format');
    expect(() => parseHsl('hsl(120, -10%, 50%)')).toThrow('Invalid HSL color values');
    expect(() => parseHsl('hsl(120, 100%, -50%)')).toThrow('Invalid HSL color values');
    expect(() => parseHsl('hsl(360, 100%, 50%, 1.5)')).toThrow(
      'Alpha value must be between 0 and 1'
    );
    expect(() => parseHsl('hsl(360, 100%, 50%, 200%)')).toThrow(
      'Alpha value must be between 0 and 1'
    );
  });
});
