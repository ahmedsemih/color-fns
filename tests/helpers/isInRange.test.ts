import { describe, it, expect } from 'vitest';
import { isInRange } from '../../src/helpers';

describe('isInRange', () => {
  it('should return true for values within the range', () => {
    expect(isInRange(5, 1, 10)).toBe(true);
    expect(isInRange(1, 1, 10)).toBe(true);
    expect(isInRange(10, 1, 10)).toBe(true);
    expect(isInRange(200, 0, 255)).toBe(true);
  });

  it('should return false for values outside the range', () => {
    expect(isInRange(0, 1, 10)).toBe(false);
    expect(isInRange(11, 1, 10)).toBe(false);
    expect(isInRange(-5, -3, -1)).toBe(false);
    expect(isInRange(3.5, 4, 5)).toBe(false);
    expect(isInRange(Infinity, 10, 20)).toBe(false);
    expect(isInRange(NaN, 10, 20)).toBe(false);
  });
});
