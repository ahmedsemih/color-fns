import { describe, it, expect } from 'vitest';
import { parseChannel } from '../../src';

describe('parseChannel', () => {
  it('should parse percentage values correctly', () => {
    expect(parseChannel('50%')).toBe(127.5);
    expect(parseChannel('100%')).toBe(255);
    expect(parseChannel('0%')).toBe(0);
  });

  it('should parse number values correctly', () => {
    expect(parseChannel('128')).toBe(128);
    expect(parseChannel('255')).toBe(255);
    expect(parseChannel('0')).toBe(0);
    expect(parseChannel('0.5')).toBe(0.5);
  });

  it('should be NaN for invalid inputs', () => {
    expect(parseChannel('invalid')).toBeNaN();
    expect(parseChannel('')).toBeNaN();
    expect(parseChannel('abc')).toBeNaN();
    expect(parseChannel('abc%')).toBeNaN();
  });
});
