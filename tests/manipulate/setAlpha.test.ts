import { describe, it, expect } from 'vitest';
import { setAlpha } from '../../src';

describe('setAlpha', () => {
  it('should set the alpha value of an RGB color', () => {
    const color = { red: 255, green: 87, blue: 51 };
    const result = setAlpha(color, 0.5);
    expect(result).toEqual({ red: 255, green: 87, blue: 51, alpha: 0.5 });
  });

  it('should set the alpha value of an RGBA color', () => {
    const color = { red: 255, green: 87, blue: 51, alpha: 1 };
    const result = setAlpha(color, 0.3);
    expect(result).toEqual({ red: 255, green: 87, blue: 51, alpha: 0.3 });
  });

  it('should set the alpha value of an RGB color string', () => {
    const color = 'rgb(255, 87, 51)';
    const result = setAlpha(color, 0.7);
    expect(result).toBe('rgba(255, 87, 51, 0.7)');
  });

  it('should set the alpha value of a hex color', () => {
    const color = '#ff5733';
    const result = setAlpha(color, 0.8);
    expect(result).toBe('#FF5733CC');
  });

  it('should set the alpha value of an HSL color', () => {
    const color = { hue: 9, saturation: 100, lightness: 60 };
    const result = setAlpha(color, 0.6);
    expect(result).toEqual({ hue: 9, saturation: 100, lightness: 60, alpha: 0.6 });
  });

  it('should set the alpha value of an HSL color string', () => {
    const color = 'hsl(9, 100%, 60%)';
    const result = setAlpha(color, 0.6);
    expect(result).toBe('hsla(9, 100%, 60%, 0.6)');
  });

  it('should handle setting alpha to 1 (fully opaque)', () => {
    const color = { red: 255, green: 87, blue: 51 };
    const result = setAlpha(color, 1);
    expect(result).toEqual({ red: 255, green: 87, blue: 51, alpha: 1 });
  });

  it('should handle setting alpha to 0 (fully transparent)', () => {
    const color = { red: 255, green: 87, blue: 51 };
    const result = setAlpha(color, 0);
    expect(result).toEqual({ red: 255, green: 87, blue: 51, alpha: 0 });
  });
});
