import { describe, it, expect } from 'vitest';
import { grayscale } from '../../src';

describe('grayscale', () => {
  it('should convert RGB color to grayscale', () => {
    const color = { red: 100, green: 150, blue: 200 };
    const result = grayscale(color);
    expect(result).toEqual({ red: 150, green: 150, blue: 150 });
  });

  it('should convert HEX color to grayscale', () => {
    const color = '#6496c8';
    const result = grayscale(color);
    expect(result).toBe('#969696');
  });

  it('should convert HSL color to grayscale', () => {
    const color = { hue: 210, saturation: 0.5, lightness: 0.5 };
    const result = grayscale(color);
    expect(result).toEqual({ hue: 210, saturation: 0, lightness: 0.5 });
  });

  it('should convert RGB string color to grayscale', () => {
    const color = 'rgb(100, 150, 200)';
    const result = grayscale(color);
    expect(result).toBe('rgb(150, 150, 150)');
  });

  it('should convert HSL string color to grayscale', () => {
    const color = 'hsl(210, 50%, 50%)';
    const result = grayscale(color);
    expect(result).toBe('hsl(210, 0%, 50%)');
  });

  it('should handle alpha channel in RGBA color', () => {
    const color = { red: 100, green: 150, blue: 200, alpha: 0.5 };
    const result = grayscale(color);
    expect(result).toEqual({ red: 150, green: 150, blue: 150, alpha: 0.5 });
  });

  it('should handle alpha channel in HSLA color', () => {
    const color = { hue: 210, saturation: 0.5, lightness: 0.5, alpha: 0.5 };
    const result = grayscale(color);
    expect(result).toEqual({ hue: 210, saturation: 0, lightness: 0.5, alpha: 0.5 });
  });

  it('should return the same color if already grayscale', () => {
    const color = { red: 150, green: 150, blue: 150 };
    const result = grayscale(color);
    expect(result).toEqual(color);
  });

  it('should throw error for invalid color format', () => {
    const color = 'invalidColor';
    expect(() => grayscale(color)).toThrowError('Invalid color format');
  });
});
