import { describe, it, expect } from 'vitest';
import { toHsl } from '../../src';

describe('toHsl', () => {
  it('should convert RGB object to HSL', () => {
    expect(toHsl({ red: 125, green: 200, blue: 80 })).toEqual({
      hue: 98,
      saturation: 52,
      lightness: 55,
    });
    expect(toHsl({ red: 40, green: 41, blue: 115 })).toEqual({
      hue: 239,
      saturation: 48,
      lightness: 30,
    });
    expect(toHsl({ red: 255, green: 0, blue: 0, alpha: 0.5 })).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
  });

  it('should convert RGB string to HSL', () => {
    expect(toHsl('rgb(125, 200, 80)')).toEqual({
      hue: 98,
      saturation: 52,
      lightness: 55,
      alpha: 1,
    });
    expect(toHsl('rgb(40, 41, 115)')).toEqual({
      hue: 239,
      saturation: 48,
      lightness: 30,
      alpha: 1,
    });
    expect(toHsl('rgba(255, 0, 0, 0.5)')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
  });

  it('should convert HSL object to HSL', () => {
    expect(toHsl({ hue: 120, saturation: 100, lightness: 50 })).toEqual({
      hue: 120,
      saturation: 100,
      lightness: 50,
    });
    expect(toHsl({ hue: 240, saturation: 100, lightness: 50, alpha: 0.5 })).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
  });

  it('should convert HSL string to HSL', () => {
    expect(toHsl('hsl(120, 100%, 50%)')).toEqual({
      hue: 120,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(toHsl('hsl(240, 100%, 50%, 0.5)')).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
    expect(toHsl('hsl(180deg, 100%, 50%)')).toEqual({
      hue: 180,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
  });

  it('should convert hex string to HSL', () => {
    expect(toHsl('#ff0000')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(toHsl('#00ff00')).toEqual({
      hue: 120,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(toHsl('#0000ff')).toEqual({
      hue: 240,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    });
    expect(toHsl('#ff000080')).toEqual({
      hue: 0,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
  });

  it('should throw an error for invalid input', () => {
    expect(() => toHsl('invalid')).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
    expect(() => toHsl(123 as any)).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
    expect(() => toHsl({ red: 255, green: 255 } as any)).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
    expect(() => toHsl({} as any)).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
    expect(() => toHsl(null as any)).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
  });
});
