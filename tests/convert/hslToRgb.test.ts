import { describe, it, expect } from 'vitest';
import { hslToRgb } from '../../src';

describe('hslToRgb', () => {
  it('should convert HSL to RGB correctly', () => {
    expect(hslToRgb('hsl(240, 100%, 50%)')).toEqual({ red: 0, green: 0, blue: 255, alpha: 1 });
    expect(hslToRgb({ hue: 240, saturation: 100, lightness: 50 })).toEqual({
      red: 0,
      green: 0,
      blue: 255,
    });
  });

  it('should handle HSL with alpha', () => {
    expect(hslToRgb('hsla(240, 100%, 50%, 0.5)')).toEqual({
      red: 0,
      green: 0,
      blue: 255,
      alpha: 0.5,
    });
    expect(hslToRgb({ hue: 240, saturation: 100, lightness: 50, alpha: 0.5 })).toEqual({
      red: 0,
      green: 0,
      blue: 255,
      alpha: 0.5,
    });
  });
});
