import { describe, it, expect } from 'vitest';
import { randomHex } from '../../src';

describe('randomHex', () => {
  it('should return a string starting with #', () => {
    const color = randomHex();
    expect(color).toMatch(/^#/);
  });

  it('should return a valid hexadecimal color string', () => {
    const color = randomHex();
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it('should generate different colors on subsequent calls', () => {
    const color1 = randomHex();
    const color2 = randomHex();
    expect(color1).not.toEqual(color2);
  });
});
