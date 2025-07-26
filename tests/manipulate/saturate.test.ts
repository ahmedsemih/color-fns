import { describe, it, expect } from 'vitest';
import { saturate } from '../../src';

describe('saturate', () => {
  it('should increase saturation by a percentage', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = saturate(color, 20);
    expect(result).toEqual({ hue: 200, saturation: 70, lightness: 50 });
  });

  it('should not exceed saturation of 100', () => {
    const color = { hue: 200, saturation: 90, lightness: 50 };
    const result = saturate(color, 20);
    expect(result).toEqual({ hue: 200, saturation: 100, lightness: 50 });
  });

  it('should not go below saturation of 0', () => {
    const color = { hue: 200, saturation: 10, lightness: 50 };
    const result = saturate(color, -20);
    expect(result).toEqual({ hue: 200, saturation: 0, lightness: 50 });
  });

  it('should handle saturation as a fraction', () => {
    const color = { hue: 200, saturation: 50, lightness: 50 };
    const result = saturate(color, 0.2);
    expect(result).toEqual({ hue: 200, saturation: 70, lightness: 50 });
  });
});
