import { describe, it, expect } from 'vitest';
import { isAlphaValid } from '../../src/helpers';

describe('isAlphaValid', () => {
  it('should return true for valid alpha values', () => {
    expect(isAlphaValid('0')).toBe(true);
    expect(isAlphaValid('0.5')).toBe(true);
    expect(isAlphaValid('1')).toBe(true);
    expect(isAlphaValid('50%')).toBe(true);
    expect(isAlphaValid('100%')).toBe(true);
    expect(isAlphaValid(0)).toBe(true);
    expect(isAlphaValid(0.5)).toBe(true);
    expect(isAlphaValid(1)).toBe(true);
  });

  it('should return false for invalid alpha values', () => {
    expect(isAlphaValid('-0.1')).toBe(false);
    expect(isAlphaValid('1.5')).toBe(false);
    expect(isAlphaValid('150%')).toBe(false);
    expect(isAlphaValid('invalid')).toBe(false);
    expect(isAlphaValid('')).toBe(false);
  });
});
