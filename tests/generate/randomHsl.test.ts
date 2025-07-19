import { describe, it, expect } from 'vitest';
import { randomHsl } from '../../src';

describe('randomHsl', () => {
  it('should return an object with hue, saturation, and lightness properties', () => {
    const color = randomHsl();
    expect(color).toHaveProperty('hue');
    expect(color).toHaveProperty('saturation');
    expect(color).toHaveProperty('lightness');
  });

  it('should return hue between 0 and 360', () => {
    const color = randomHsl();
    expect(color.hue).toBeGreaterThanOrEqual(0);
    expect(color.hue).toBeLessThan(360);
  });

  it('should return saturation and lightness between 0 and 100', () => {
    const color = randomHsl();
    expect(color.saturation).toBeGreaterThanOrEqual(0);
    expect(color.saturation).toBeLessThanOrEqual(100);
    expect(color.lightness).toBeGreaterThanOrEqual(0);
    expect(color.lightness).toBeLessThanOrEqual(100);
  });

  it('should generate different colors on subsequent calls', () => {
    const color1 = randomHsl();
    const color2 = randomHsl();
    expect(color1).not.toEqual(color2);
  });
});