import { describe, it, expect } from 'vitest';
import { parseHue } from '../../src/helpers';

describe('parseHue', () => {
  it('should parse positive, negative, and large degree values', () => {
    expect(parseHue('0deg')).toBe(0);
    expect(parseHue('180deg')).toBe(180);
    expect(parseHue('-90deg')).toBe(-90);
    expect(parseHue('450deg')).toBe(450);
  });

  it('should treat unitless values as degrees', () => {
    expect(parseHue('0')).toBe(0);
    expect(parseHue('180')).toBe(180);
    expect(parseHue('-90')).toBe(-90);
  });

  it('should parse radian values and convert to degrees', () => {
    expect(parseHue('0rad')).toBe(0);
    expect(parseHue('3.14159rad')).toBeCloseTo(180);
    expect(parseHue('-1.5708rad')).toBeCloseTo(-90);
    expect(parseHue('6.28318rad')).toBeCloseTo(360);
  });

  it('should parse gradian values and convert to degrees', () => {
    expect(parseHue('0grad')).toBe(0);
    expect(parseHue('100grad')).toBe(90);
    expect(parseHue('200grad')).toBe(180);
    expect(parseHue('-100grad')).toBe(-90);
    expect(parseHue('500grad')).toBe(450);
  });

  it('should parse turn values and convert to degrees', () => {
    expect(parseHue('0turn')).toBe(0);
    expect(parseHue('0.5turn')).toBe(180);
    expect(parseHue('1turn')).toBe(360);
    expect(parseHue('-0.25turn')).toBe(-90);
    expect(parseHue('1.5turn')).toBe(540);
  });

  it('should return NaN for invalid or malformed strings', () => {
    expect(parseHue('invalid')).toBeNaN();
    expect(parseHue('')).toBeNaN();
    expect(parseHue(' ')).toBeNaN();
    expect(parseHue('180 px')).toBeNaN();
    expect(parseHue('180deg extra')).toBeNaN();
    expect(parseHue('--90')).toBeNaN();
  });

  it('should handle whitespace correctly', () => {
    expect(parseHue('  180deg  ')).toBe(180);
    expect(parseHue(' -0.5turn ')).toBe(-180);
  });
});
