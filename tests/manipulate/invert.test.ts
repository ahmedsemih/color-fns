import { describe, it, expect } from 'vitest';
import { invert } from '../../src';

describe('invert', () => {
  it('should invert hex color', () => {
    expect(invert('#ff0000')).toBe('#00FFFF');
  });

  it('should invert RGB string color', () => {
    expect(invert('rgb(255, 0, 0)')).toBe('rgb(0, 255, 255)');
  });

  it('should invert RGB object', () => {
    expect(invert({ red: 255, green: 0, blue: 0 })).toEqual({
      red: 0,
      green: 255,
      blue: 255,
    });
  });

  it('should invert HSL string color', () => {
    expect(invert('hsl(0, 100%, 50%)')).toBe('hsl(180, 100%, 50%)');
  });

  it('should invert HSL object', () => {
    expect(invert({ hue: 0, saturation: 100, lightness: 50 })).toEqual({
      hue: 180,
      saturation: 100,
      lightness: 50,
    });
  });

  it('should handle alpha channel', () => {
    expect(invert({ red: 255, green: 0, blue: 0, alpha: 0.5 })).toEqual({
      red: 0,
      green: 255,
      blue: 255,
      alpha: 0.5,
    });
    expect(invert('rgba(255, 0, 0, 0.5)')).toBe('rgba(0, 255, 255, 0.5)');
    expect(invert('#ff000080')).toBe('#00FFFF80');
    expect(invert('hsla(0, 100%, 50%, 0.5)')).toBe('hsla(180, 100%, 50%, 0.5)');
    expect(invert({ hue: 0, saturation: 100, lightness: 50, alpha: 0.5 })).toEqual({
      hue: 180,
      saturation: 100,
      lightness: 50,
      alpha: 0.5,
    });
  });
});
