import { describe, it, expect } from 'vitest';
import { parseRgb } from '../../src';

describe('parseRgb', () => {
  it('should parse valid RGB strings', () => {
    expect(parseRgb('rgb(255, 0, 0)')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(parseRgb('rgba(255, 0, 0, 1)')).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
    expect(parseRgb('rgb(123, 234, 45)')).toEqual({ red: 123, green: 234, blue: 45, alpha: 1 });
    expect(parseRgb('rgba(123, 234, 45, 0.8)')).toEqual({
      red: 123,
      green: 234,
      blue: 45,
      alpha: 0.8,
    });
    expect(parseRgb('rgb(100%, 50%, 0%)')).toEqual({ red: 255, green: 127.5, blue: 0, alpha: 1 });
    expect(parseRgb('rgba(100%, 50%, 0%, 0.5)')).toEqual({
      red: 255,
      green: 127.5,
      blue: 0,
      alpha: 0.5,
    });
  });

  it('should throw an error for invalid RGB strings', () => {
    expect(() => parseRgb('rgb()')).toThrow('Invalid RGB color format');
    expect(() => parseRgb('rgba()')).toThrow('Invalid RGB color format');
    expect(() => parseRgb(null as any)).toThrow('Invalid RGB color format');
    expect(() => parseRgb(121312 as any)).toThrow('Invalid RGB color format');
    expect(() => parseRgb('rgba(sdfsdfsd)')).toThrow('Invalid RGB color format');
    expect(() => parseRgb('rgb(256, 0, 0)')).toThrow('RGB values must be between 0 and 255');
    expect(() => parseRgb('rgba(300, -10, 50)')).toThrow('RGB values must be between 0 and 255');
    expect(() => parseRgb('rgb(-1,-1,-1)')).toThrow('RGB values must be between 0 and 255');
    expect(() => parseRgb('rgba(-1,-1,-1,.5)')).toThrow('RGB values must be between 0 and 255');
    expect(() => parseRgb('rgba(100%, 50%, 0%, 500%)')).toThrow(
      'Alpha value must be between 0 and 1'
    );
  });
});
