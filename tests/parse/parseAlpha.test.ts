import { describe, it, expect } from 'vitest';
import { parseAlpha } from '../../src';

describe('parseAlpha', () => {
  it('should parse valid alpha values', () => {
    expect(parseAlpha('0')).toBe(0);
    expect(parseAlpha('1')).toBe(1);
    expect(parseAlpha('0.5')).toBe(0.5);
    expect(parseAlpha('50%')).toBe(0.5);
    expect(parseAlpha('100%')).toBe(1);
    expect(parseAlpha(' 0.75 ')).toBe(0.75);
    expect(parseAlpha(' 50% ')).toBe(0.5);
  });

  it('should throw error for invalid inputs', () => {
    expect(() => parseAlpha('invalid')).throw('Invalid alpha value: "invalid"');
    expect(() => parseAlpha('abc')).throw('Invalid alpha value: "abc"');
    expect(() => parseAlpha('-1')).throw('Alpha value must be between 0 and 1');
    expect(() => parseAlpha('2')).throw('Alpha value must be between 0 and 1');
    expect(() => parseAlpha('150%')).throw('Alpha value must be between 0 and 1');
    expect(() => parseAlpha(false as any)).throw('Invalid alpha value format');
    expect(() => parseAlpha(null as any)).throw('Invalid alpha value format');
  });
});
