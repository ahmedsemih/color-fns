import { describe, it, expect } from 'vitest';
import { isHsl } from '../../src';

describe('isHsl', () => {
  it('should return true for valid HSL strings', () => {
    expect(isHsl('hsl(0, 100%, 50%)')).toBe(true);
    expect(isHsl('hsl(120, 50%, 75%)')).toBe(true);
    expect(isHsl('hsl(120, 50, 75)')).toBe(true);
    expect(isHsl('hsl(-120, 50, 75)')).toBe(true);
    expect(isHsl('hsl(520, 50, 75)')).toBe(true);
    expect(isHsl('hsl(50 80% 40%)')).toBe(true);
    expect(isHsl('hsl(90deg 100% 50%)')).toBe(true);
    expect(isHsl('hsl(1.57rad 100% 50%)')).toBe(true);
    expect(isHsl('hsl(100grad 100% 50%)')).toBe(true);
    expect(isHsl('hsl(0.3turn 60% 45% / 0.7)')).toBe(true);
    expect(isHsl('hsl(0 80% 50% / 25%)')).toBe(true);
  });

  it('should return false for HSL strings with invalid values', () => {
    expect(isHsl('hsl(360, 100%, 50%, 3)')).toBe(false);
    expect(isHsl('hsl(366deg, 100%, -10%)')).toBe(false);
    expect(isHsl('hsl(360, 100%, 110%)')).toBe(false);
    expect(isHsl('hsl(0, 100%, 50%%, 1)')).toBe(false);
    expect(isHsl('hsl(invalid)')).toBe(false);
    expect(isHsl('rgb(255, 0, 0)')).toBe(false);
    expect(isHsl('#ff0000')).toBe(false);
    expect(isHsl(' ')).toBe(false);
    expect(isHsl('')).toBe(false);
  });

  it('should return true for valid HSL objects', () => {
    expect(isHsl({ hue: 0, saturation: 100, lightness: 50 })).toBe(true);
    expect(isHsl({ hue: 120, saturation: 50, lightness: 75 })).toBe(true);
    expect(isHsl({ hue: 240, saturation: 100, lightness: 50, alpha: 1 })).toBe(true);
    expect(isHsl({ hue: 300, saturation: 60, lightness: 40, alpha: 0.5 })).toBe(true);
    expect(isHsl({ hue: 180, saturation: 60, lightness: 40 })).toBe(true);
    expect(isHsl({ hue: 360, saturation: 100, lightness: 50, alpha: undefined })).toBe(true);
    expect(isHsl({ hue: 360, saturation: 100, lightness: 50, alpha: null })).toBe(true);
  });

  it('should return false for invalid HSL objects', () => {
    expect(isHsl({ hue: 361, saturation: 100, lightness: 50 })).toBe(false);
    expect(isHsl({ hue: -1, saturation: 100, lightness: 50 })).toBe(false);
    expect(isHsl({ hue: 360, saturation: -10, lightness: 50 })).toBe(false);
    expect(isHsl({ hue: 360, saturation: 100, lightness: -10 })).toBe(false);
    expect(isHsl({ hue: 180, saturation: 60, lightness: 40, alpha: -0.1 })).toBe(false);
    expect(isHsl({ hue: 180, saturation: 60, lightness: 40, alpha: 1.5 })).toBe(false);
    expect(isHsl({ hue: 'hue', saturation: 'saturation', lightness: 'lightness' })).toBe(false);
    expect(isHsl({})).toBe(false);
    expect(isHsl(null)).toBe(false);
    expect(isHsl(undefined)).toBe(false);
  });
});
