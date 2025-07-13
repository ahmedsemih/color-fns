import { describe, it, expect } from 'vitest';
import { parseHex } from '../../src';

describe('parseHex', () => {
  it('should parse 3-digit hex color', () => {
    expect(parseHex('#f00')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(parseHex('#00f')).toEqual({ red: 0, green: 0, blue: 255, alpha: 1 });
  });

  it('should parse 4-digit hex color', () => {
    expect(parseHex('#f000')).toEqual({ red: 255, green: 0, blue: 0, alpha: 0 });
    expect(parseHex('#ff0f')).toEqual({ red: 255, green: 255, blue: 0, alpha: 1 });
  });

  it('should parse 6-digit hex color', () => {
    expect(parseHex('#ff0000')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(parseHex('#0000ff')).toEqual({ red: 0, green: 0, blue: 255, alpha: 1 });
  });

  it('should parse 8-digit hex color', () => {
    expect(parseHex('#ff000080')).toEqual({ red: 255, green: 0, blue: 0, alpha: 0.5 });
    expect(parseHex('#00ff0080')).toEqual({ red: 0, green: 255, blue: 0, alpha: 0.5 });
  });

  it('should throw an error for invalid hex format', () => {
    expect(() => parseHex('#xyz')).toThrow('Invalid Hex color format.');
    expect(() => parseHex('not-a-hex')).toThrow('Invalid Hex color format.');
    expect(() => parseHex('#12345')).toThrow('Invalid Hex color format.');
    expect(() => parseHex('#123456789')).toThrow('Invalid Hex color format.');
    expect(() => parseHex(123 as any)).toThrow('Invalid Hex color format.');
    expect(() => parseHex(null as any)).toThrow('Invalid Hex color format.');
  });
});