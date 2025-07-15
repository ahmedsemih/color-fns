import { describe, it, expect } from 'vitest';
import { rgbToHsl } from '../../src';

describe('rgbToHsl', () => {
  it('should convert RGB to HSL correctly', () => {
    expect(rgbToHsl({ red: 0, green: 255, blue: 0 })).toEqual({
      hue: 120,
      saturation: 100,
      lightness: 50,
    });
    expect(rgbToHsl({ red: 255, green: 0, blue: 0 })).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
    });
    expect(rgbToHsl({ red: 0, green: 0, blue: 255 })).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
    });
    expect(rgbToHsl({ red: 255, green: 255, blue: 0 })).toEqual({
      hue: 60,
      saturation: 100,
      lightness: 50,
    });
    expect(rgbToHsl({ red: 255, green: 0, blue: 0, alpha: 1 })).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(rgbToHsl({ red: 0, green: 0, blue: 255, alpha: 0.5 })).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
  });

  it('should handle RGB string input', () => {
    expect(rgbToHsl('rgb(0, 255, 0)')).toEqual({
      hue: 120,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(rgbToHsl('rgb(255, 0, 0)')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(rgbToHsl('rgb(0, 0, 255)')).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(rgbToHsl('rgb(255, 255, 0)')).toEqual({
      hue: 60,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(rgbToHsl('rgb(255, 0, 0, 1)')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(rgbToHsl('rgb(0, 0, 255, 0.5)')).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
  });

  it('should throw an error for invalid RGB format', () => {
    expect(() => rgbToHsl('invalid')).toThrow('Invalid RGB color format');
    expect(() => rgbToHsl({ red: 256, green: 0, blue: 0 })).toThrow('Invalid RGB color format');
    expect(() => rgbToHsl({ red: 0, green: -1, blue: 0 })).toThrow('Invalid RGB color format');
    expect(() => rgbToHsl({ red: 0, green: 0 } as any)).toThrow('Invalid RGB color format');
    expect(() => rgbToHsl({} as any)).toThrow('Invalid RGB color format');
    expect(() => rgbToHsl(null as any)).toThrow('Invalid RGB color format');
  });
});
