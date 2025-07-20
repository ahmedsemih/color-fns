import { describe, it, expect } from 'vitest';
import { generateTints } from '../../src';

describe('generateTints', () => {
  it('should generate tints for RGB color', () => {
    const color = { red: 255, green: 88, blue: 51 };
    const tints = generateTints(color, 3);

    expect(tints).toHaveLength(3);
    expect(tints[0]).toEqual({ red: 255, green: 88, blue: 51 });
  });

  it('should generate tints for HSL color', () => {
    const color = { hue: 10, saturation: 100, lightness: 60, alpha: 1 };
    const tints = generateTints(color, 2);

    expect(tints).toHaveLength(2);
    expect(tints[0]).toEqual({ hue: 10, saturation: 100, lightness: 60, alpha: 1 });
  });

  it('should generate tints for HSL string color', () => {
    const color = 'hsl(10, 100%, 60%)';
    const tints = generateTints(color, 4);

    expect(tints).toHaveLength(4);
    expect(tints[0]).toBe('hsl(10, 100%, 60%)');
  });

  it('should generate tints for RGB string color', () => {
    const color = 'rgba(255, 88, 51, 0.5)';
    const tints = generateTints(color);

    expect(tints).toHaveLength(10);
    expect(tints[0]).toBe('rgba(255, 88, 51, 0.5)');
  });

  it('should generate tints for HEX color', () => {
    const color = '#FF5833';
    const tints = generateTints(color, 5);

    expect(tints).toHaveLength(5);
    expect(tints[0]).toBe('#FF5833');
  });

  it('should throw error for invalid color formats', () => {
    expect(() => generateTints('invalidColor' as any, 3)).toThrowError();
    expect(() => generateTints(null as any, 3)).toThrowError();
    expect(() => generateTints(undefined as any, 3)).toThrowError();
    expect(() => generateTints({ red: 1321, green: 213 } as any, 3)).toThrowError();
  });
});
