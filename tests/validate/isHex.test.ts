import { describe, it, expect } from 'vitest';
import { isHex } from '../../src';

describe('isHex', () => {
  it('should return true for valid hex colors', () => {
    expect(isHex('#fff')).toBe(true);
    expect(isHex('#ffffff')).toBe(true);
    expect(isHex('#123')).toBe(true);
    expect(isHex('#123456')).toBe(true);
    expect(isHex('#12345678')).toBe(true);
  });

  it('should return false for invalid hex colors', () => {
    expect(isHex('#ggg')).toBe(false);
    expect(isHex('12345')).toBe(false);
    expect(isHex('not-a-hex')).toBe(false);
    expect(isHex('#12')).toBe(false);
    expect(isHex('#12345')).toBe(false);
    expect(isHex('123213')).toBe(false);
    expect(isHex('#12g34f')).toBe(false);
  });
});
