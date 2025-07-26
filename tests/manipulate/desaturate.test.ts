import { describe, it, expect } from 'vitest';
import { desaturate } from '../../src';

describe('desaturate', () => {
  it('should decrease saturation by a percentage', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = desaturate(color, 20);
    expect(result).toEqual({ hue: 200, saturation: 30, lightness: 50 });
  });

  it('should not go below saturation of 0', () => {
    const color = { hue: 200, saturation: 10, lightness: 50 };
    const result = desaturate(color, 20);
    expect(result).toEqual({ hue: 200, saturation: 0, lightness: 50 });
  });

  it('should handle desaturation as a fraction', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = desaturate(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 30, lightness: 50 });
  });
});
