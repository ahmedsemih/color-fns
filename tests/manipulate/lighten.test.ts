import { describe, it, expect } from 'vitest';
import { lighten } from '../../src';

describe('lighten', () => {
  it('should lighten a color by a percentage', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = lighten(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 70 });
  });

  it('should not exceed lightness limits', () => {
    const color = { hue: 200, saturation: 50, lightness: 90 };
    const result = lighten(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 100 });
  });

  it('should handle negative lightening', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = lighten(color, -0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 30 });
  });

  it('should handle lightening with values between 0 and 1', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = lighten(color, 0.5);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 100 });
  });

  it('should handle alpha values', () => {
    const color = { hue: 200, saturation: 50, lightness: 50, alpha: 0.5 };
    const result = lighten(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 50, lightness: 70, alpha: 0.5 });
  });

  it('should return the color in the same format as input', () => {
    expect(lighten('rgb(100, 150, 200)', 0.2)).toBe('rgb(176, 201, 227)');
    expect(lighten('#6496c8', 0.2)).toBe('#B0C9E3');
    expect(lighten('hsl(200, 50%, 50%)', 0.2)).toBe('hsl(200, 50%, 70%)');
  });
});
