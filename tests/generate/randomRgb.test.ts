import { describe, it, expect } from 'vitest';
import { randomRgb } from '../../src';

describe('randomRgb', () => {
  it('should return an object with red, green, and blue properties', () => {
    const color = randomRgb();
    expect(color).toHaveProperty('red');
    expect(color).toHaveProperty('green');
    expect(color).toHaveProperty('blue');
  });

  it('should return values between 0 and 255 for each color component', () => {
    const color = randomRgb();
    expect(color.red).toBeGreaterThanOrEqual(0);
    expect(color.red).toBeLessThanOrEqual(255);
    expect(color.green).toBeGreaterThanOrEqual(0);
    expect(color.green).toBeLessThanOrEqual(255);
    expect(color.blue).toBeGreaterThanOrEqual(0);
    expect(color.blue).toBeLessThanOrEqual(255);
  });

  it('should generate different colors on subsequent calls', () => {
    const color1 = randomRgb();
    const color2 = randomRgb();
    expect(color1).not.toEqual(color2);
  });
});
