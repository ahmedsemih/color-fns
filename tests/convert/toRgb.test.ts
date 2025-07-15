import { describe, it, expect } from 'vitest';
import { toRgb } from '../../src';

describe('toRgb', () => {
  it('should convert valid HSL strings to RGB', () => {
    expect(toRgb('hsl(0, 100%, 50%)')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(toRgb('hsl(180, 100%, 50%)')).toEqual({ red: 0, green: 255, blue: 255, alpha: 1 });
    expect(toRgb('hsl(30deg, 100%, 50%)')).toEqual({ red: 255, green: 128, blue: 0, alpha: 1 });
    expect(toRgb('hsl(90deg, 100%, 50%)')).toEqual({ red: 128, green: 255, blue: 0, alpha: 1 });
  });
  it('should convert valid RGB strings to RGB', () => {
    expect(toRgb('rgb(255, 0, 0)')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(toRgb('rgb(255, 255, 0)')).toEqual({ red: 255, green: 255, blue: 0, alpha: 1 });
    expect(toRgb('rgba(255, 0, 255, 0.5)')).toEqual({ red: 255, green: 0, blue: 255, alpha: 0.5 });
    expect(toRgb('rgba(128, 128, 128, 0.5)')).toEqual({
      red: 128,
      green: 128,
      blue: 128,
      alpha: 0.5,
    });
  });
  it('should convert valid hex strings to RGB', () => {
    expect(toRgb('#ff8000')).toEqual({ red: 255, green: 128, blue: 0, alpha: 1 });
    expect(toRgb('#0080ff')).toEqual({ red: 0, green: 128, blue: 255, alpha: 1 });
    expect(toRgb('#123456')).toEqual({ red: 18, green: 52, blue: 86, alpha: 1 });
    expect(toRgb('#abcdef')).toEqual({ red: 171, green: 205, blue: 239, alpha: 1 });
    expect(toRgb('#fff')).toEqual({ red: 255, green: 255, blue: 255, alpha: 1 });
    expect(toRgb('#f00')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(toRgb('#0f0')).toEqual({ red: 0, green: 255, blue: 0, alpha: 1 });
  });
  it('should return RGB object for RgbColor input', () => {
    const rgbColor = { red: 255, green: 0, blue: 0, alpha: 1 };
    expect(toRgb(rgbColor)).toEqual(rgbColor);
  });
  it('should convert HslColor objects to RGB', () => {
    expect(toRgb({ hue: 120, saturation: 100, lightness: 50 })).toEqual({
      red: 0,
      green: 255,
      blue: 0,
    });
    expect(toRgb({ hue: 240, saturation: 100, lightness: 50, alpha: 0.5 })).toEqual({
      red: 0,
      green: 0,
      blue: 255,
      alpha: 0.5,
    });
  });
  it('should throw an error for invalid color formats', () => {
    expect(() => toRgb('invalid')).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
    expect(() => toRgb(123 as any)).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
    expect(() => toRgb(null as any)).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
    expect(() => toRgb({} as any)).toThrow(
      'Invalid color format. Expected a hex, RGB, or HSL string, or an RGB/HSL object.'
    );
  });
});
