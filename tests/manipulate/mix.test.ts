import { describe, it, expect } from 'vitest';
import { mix } from '../../src';

describe('mix', () => {
  it('should mix two RGB colors', () => {
    const color1 = { red: 255, green: 0, blue: 0 };
    const color2 = { red: 0, green: 0, blue: 255 };
    const result = mix(color1, color2, 0.5);
    expect(result).toEqual({ red: 128, green: 0, blue: 128 });
  });

  it('should mix two HSL colors', () => {
    const color1 = { hue: 0, saturation: 100, lightness: 50 };
    const color2 = { hue: 240, saturation: 100, lightness: 50 };
    const result = mix(color1, color2, 0.5);
    expect(result).toEqual({ hue: 300, saturation: 100, lightness: 25, alpha: 1 });
  });

  it('should return the mixed color in the same format as the first color', () => {
    const color1 = 'rgb(255, 0, 0)';
    const color2 = 'rgb(0, 0, 255)';
    const result = mix(color1, color2);
    expect(result).toBe('rgb(128, 0, 128)');

    const hslColor1 = 'hsl(0, 100%, 50%)';
    const hslColor2 = 'hsl(240, 100%, 50%)';
    const hslResult = mix(hslColor1, hslColor2);
    expect(hslResult).toBe('hsl(300, 100%, 25%)');

    const hexColor1 = '#ff0000';
    const hexColor2 = '#0000ff';
    const hexResult = mix(hexColor1, hexColor2);
    expect(hexResult).toBe('#800080');
  });

  it('should handle alpha values correctly', () => {
    const color1 = { red: 255, green: 0, blue: 0, alpha: 0.5 };
    const color2 = { red: 0, green: 0, blue: 255, alpha: 0.5 };
    const result = mix(color1, color2);
    expect(result).toEqual({ red: 128, green: 0, blue: 128, alpha: 0.5 });
  });
});
