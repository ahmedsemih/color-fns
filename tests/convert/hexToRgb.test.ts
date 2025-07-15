import { describe, it, expect } from 'vitest';
import { hexToRgb } from '../../src';

describe('hexToRgb', () => {
  it('should convert a valid hex color to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(hexToRgb('#0f0')).toEqual({ red: 0, green: 255, blue: 0, alpha: 1 });
    expect(hexToRgb('#00f0')).toEqual({ red: 0, green: 0, blue: 255, alpha: 0 });
    expect(hexToRgb('#0000ff')).toEqual({ red: 0, green: 0, blue: 255, alpha: 1 });
  });

  it('should throw an error for an invalid hex color', () => {
    expect(() => hexToRgb('#xyz')).toThrow('Invalid Hex color format.');
    expect(() => hexToRgb('#12321312312312')).toThrow('Invalid Hex color format.');
    expect(() => hexToRgb(null as any)).toThrow('Invalid Hex color format.');
    expect(() => hexToRgb({} as any)).toThrow('Invalid Hex color format.');
  });
});
