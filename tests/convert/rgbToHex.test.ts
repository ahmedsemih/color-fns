import { describe, it, expect } from 'vitest';
import { rgbToHex } from '../../src';

describe('rgbToHex', () => {
  it('should convert RGB string to hex', () => {
    expect(rgbToHex('rgb(255, 0, 0)')).toBe('#FF0000');
    expect(rgbToHex('rgb(0, 255, 0)')).toBe('#00FF00');
    expect(rgbToHex('rgb(0, 0, 255)')).toBe('#0000FF');
    expect(rgbToHex('rgb(255, 255, 0)')).toBe('#FFFF00');
  });

  it('should convert RGB object to hex', () => {
    expect(rgbToHex({ red: 0, green: 255, blue: 0 })).toBe('#00FF00');
    expect(rgbToHex({ red: 255, green: 0, blue: 255 })).toBe('#FF00FF');
    expect(rgbToHex({ red: 0, green: 0, blue: 255 })).toBe('#0000FF');
    expect(rgbToHex({ red: 255, green: 255, blue: 255 })).toBe('#FFFFFF');
  });

  it('should handle alpha channel in RGB string', () => {
    expect(rgbToHex('rgba(0, 0, 255, 0.5)')).toBe('#0000FF80');
    expect(rgbToHex('rgba(255, 0, 0, 0.75)')).toBe('#FF0000BF');
    expect(rgbToHex('rgba(0, 255, 0, 0.25)')).toBe('#00FF0040');
    expect(rgbToHex('rgba(255, 255, 0, 0.5)')).toBe('#FFFF0080');
  });

  it('should handle alpha channel in RGB object', () => {
    expect(rgbToHex({ red: 255, green: 255, blue: 0, alpha: 0.75 })).toBe('#FFFF00BF');
    expect(rgbToHex({ red: 0, green: 0, blue: 255, alpha: 0.5 })).toBe('#0000FF80');
    expect(rgbToHex({ red: 255, green: 0, blue: 0, alpha: 0.25 })).toBe('#FF000040');
    expect(rgbToHex({ red: 0, green: 255, blue: 0, alpha: 1 })).toBe('#00FF00');
  });

  it('should throw an error for invalid RGB format', () => {
    expect(() => rgbToHex('invalid')).toThrow('Invalid RGB color format');
    expect(() => rgbToHex({ red: 256, green: 0, blue: 0 })).toThrow('Invalid RGB color format');
    expect(() => rgbToHex({ red: 0, green: -1, blue: 0 })).toThrow('Invalid RGB color format');
    expect(() => rgbToHex({ red: 0, green: 0, blue: 0, alpha: 1.5 })).toThrow(
      'Invalid RGB color format'
    );
  });
});
