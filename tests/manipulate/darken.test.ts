import { describe, it, expect } from 'vitest';
import { darken } from '../../src';

describe('darken', () => {
  it('should darken a color by a percentage', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = darken(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 30 });
  });

  it('should not exceed darkness limits', () => {
    const color = { hue: 200, saturation: 50, lightness: 10 };
    const result = darken(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 0 });
  });

  it('should handle negative darkening', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = darken(color, -0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 70 });
  });

  it('should handle darkening with values between 0 and 1', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = darken(color, 0.5);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 0 });
  });

  it('should handle alpha values', () => {
    const color = { hue: 200, saturation: 50, lightness: 50, alpha: 0.5 };
    const result = darken(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 30, alpha: 0.5 });
  });

  it('should return the color in the same format as input', () => {
    expect(darken('rgb(100, 150, 200)', 0.2)).toBe('rgb(52, 99, 147)');
    expect(darken('#6496c8', 0.2)).toBe('#346393');
    expect(darken('hsl(200, 50%, 50%)', 0.2)).toBe('hsl(200, 50%, 30%)');
  });
});
