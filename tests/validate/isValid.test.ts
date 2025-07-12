import { describe, it, expect } from 'vitest';
import { isValid } from '../../src';

describe('isValid', () => {
  it('should return true for valid hex color', () => {
    expect(isValid('#ff5733')).toBe(true);
    expect(isValid('#ff5733ff')).toBe(true);
    expect(isValid('#000')).toBe(true);
    expect(isValid('#0000')).toBe(true);
  });

  it('should return true for valid RGB color', () => {
    expect(isValid('rgb(255, 87, 51)')).toBe(true);
    expect(isValid('rgb(0, 0, 0)')).toBe(true);
    expect(isValid({ red: 255, green: 87, blue: 51 })).toBe(true);
    expect(isValid({ red: 0, green: 0, blue: 0, alpha: 0.5 })).toBe(true);
  });

  it('should return true for valid HSL color', () => {
    expect(isValid('hsl(120, 100%, 50%)')).toBe(true);
    expect(isValid('hsl(240, 100%, 50%)')).toBe(true);
    expect(isValid({ hue: 120, saturation: 100, lightness: 50 })).toBe(true);
    expect(isValid({ hue: 240, saturation: 100, lightness: 50, alpha: 0.5 })).toBe(true);
  });

  it('should return false for invalid color formats', () => {
    expect(isValid('not-a-color')).toBe(false);
    expect(isValid('#xyz')).toBe(false);
    expect(isValid('rgb(300, -20, 500)')).toBe(false);
    expect(isValid('hsl(360, 200%, -10%)')).toBe(false);
    expect(isValid({ red: 256, green: 0, blue: 0 })).toBe(false);
    expect(isValid({ hue: 360, saturation: 200, lightness: -10 })).toBe(false);
    expect(isValid(123)).toBe(false);
    expect(isValid(null)).toBe(false);
    expect(isValid(undefined)).toBe(false);
    expect(isValid({})).toBe(false);
    expect(isValid([])).toBe(false);
  });
});
