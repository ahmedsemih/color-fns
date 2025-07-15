import { describe, it, expect } from 'vitest';
import { hexToHsl } from '../../src';

describe('hexToHsl', () => {
  it('should convert a valid hex color to HSL', () => {
    expect(hexToHsl('#fff')).toEqual({ hue: 0, saturation: 0, lightness: 100, alpha: 1 });
    expect(hexToHsl('#fff0')).toEqual({ hue: 0, saturation: 0, lightness: 100, alpha: 0 });
    expect(hexToHsl('#ff0000')).toEqual({ hue: 0, saturation: 100, lightness: 50, alpha: 1 });
    expect(hexToHsl('#00ff00')).toEqual({ hue: 120, saturation: 100, lightness: 50, alpha: 1 });
    expect(hexToHsl('#0000ff')).toEqual({ hue: 240, saturation: 100, lightness: 50, alpha: 1 });
    expect(hexToHsl('#ffff00')).toEqual({ hue: 60, saturation: 100, lightness: 50, alpha: 1 });
    expect(hexToHsl('#000000')).toEqual({ hue: 0, saturation: 0, lightness: 0, alpha: 1 });
    expect(hexToHsl('#ff000080')).toEqual({ hue: 0, saturation: 100, lightness: 50, alpha: 0.5 });
    expect(hexToHsl('#00ff0080')).toEqual({ hue: 120, saturation: 100, lightness: 50, alpha: 0.5 });
    expect(hexToHsl('#0000ff80')).toEqual({ hue: 240, saturation: 100, lightness: 50, alpha: 0.5 });
  });

  it('should throw an error for an invalid hex color', () => {
    expect(() => hexToHsl('#xyz')).toThrow('Invalid Hex color format.');
    expect(() => hexToHsl('#12321312312312')).toThrow('Invalid Hex color format.');
    expect(() => hexToHsl(null as any)).toThrow('Invalid Hex color format.');
    expect(() => hexToHsl({} as any)).toThrow('Invalid Hex color format.');
    expect(() => hexToHsl({ red: 255, green: 0, blue: 0, alpha: 1 } as any)).toThrow(
      'Invalid Hex color format.'
    );
  });
});
