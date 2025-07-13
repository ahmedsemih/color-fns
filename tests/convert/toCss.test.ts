import { describe, it, expect } from 'vitest';
import { toCss } from '../../src';

describe('toCss', () => {
  it('should convert RgbColor to CSS rgb string', () => {
    expect(toCss({ red: 255, green: 128, blue: 0 })).toBe('rgb(255, 128, 0)');
    expect(toCss({ red: 0, green: 128, blue: 255 })).toBe('rgb(0, 128, 255)');
    expect(toCss({ red: 255, green: 255, blue: 255 })).toBe('rgb(255, 255, 255)');
    expect(toCss({ red: 0, green: 0, blue: 0 })).toBe('rgb(0, 0, 0)');
    expect(toCss({ red: -1, green: -1, blue: -1 })).toBe('rgb(-1, -1, -1)');
    expect(toCss({ red: -100, green: -100, blue: -100 })).toBe('rgb(-100, -100, -100)');
    expect(toCss({ red: 128, green: 128, blue: 128, alpha: 0.25 })).toBe(
      'rgba(128, 128, 128, 0.25)'
    );
    expect(toCss({ red: 128, green: 128, blue: 128, alpha: 1 })).toBe('rgb(128, 128, 128)');
    expect(toCss({ red: -1, green: -1, blue: -1, alpha: -1 })).toBe('rgba(-1, -1, -1, -1)');
    expect(toCss({ red: -100, green: -100, blue: -100, alpha: -100 })).toBe(
      'rgba(-100, -100, -100, -100)'
    );
  });

  it('should convert HslColor to CSS hsl string', () => {
    expect(toCss({ hue: 0, saturation: 100, lightness: 50 })).toBe('hsl(0, 100%, 50%)');
    expect(toCss({ hue: 120, saturation: 100, lightness: 50 })).toBe('hsl(120, 100%, 50%)');
    expect(toCss({ hue: 240, saturation: 100, lightness: 50 })).toBe('hsl(240, 100%, 50%)');
    expect(toCss({ hue: 60, saturation: 100, lightness: 50 })).toBe('hsl(60, 100%, 50%)');
    expect(toCss({ hue: 240, saturation: 100, lightness: 50, alpha: 1 })).toBe(
      'hsl(240, 100%, 50%)'
    );
    expect(toCss({ hue: 0, saturation: 100, lightness: 50, alpha: 0.5 })).toBe(
      'hsla(0, 100%, 50%, 0.5)'
    );
    expect(toCss({ hue: 120, saturation: 100, lightness: 50, alpha: 0.75 })).toBe(
      'hsla(120, 100%, 50%, 0.75)'
    );

    expect(toCss({ hue: 60, saturation: 100, lightness: 50, alpha: 0.25 })).toBe(
      'hsla(60, 100%, 50%, 0.25)'
    );
  });

  it('should throw an error for invalid color formats', () => {
    expect(() => toCss({} as any)).toThrow('Invalid color format. Expected an RGB or HSL object.');
    expect(() => toCss({ red: 255, green: 0 } as any)).toThrow(
      'Invalid color format. Expected an RGB or HSL object.'
    );
    expect(() => toCss({ hue: 120, saturation: 100 } as any)).toThrow(
      'Invalid color format. Expected an RGB or HSL object.'
    );
    expect(() => toCss(null as any)).toThrow(
      'Invalid color format. Expected an RGB or HSL object.'
    );
    expect(() => toCss(undefined as any)).toThrow(
      'Invalid color format. Expected an RGB or HSL object.'
    );
  });
});
