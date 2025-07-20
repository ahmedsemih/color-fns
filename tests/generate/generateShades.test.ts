import { describe, it, expect } from 'vitest';
import { generateShades } from '../../src';

describe('generateShades', () => {
  it('should generate shades for RGB color', () => {
    const color = { red: 255, green: 88, blue: 51 };
    const shades = generateShades(color, 3);

    expect(shades).toHaveLength(3);
    expect(shades[0]).toEqual({ red: 255, green: 88, blue: 51 });
  });

  it('should generate shades for HSL color', () => {
    const color = { hue: 10, saturation: 100, lightness: 60, alpha: 1 };
    const shades = generateShades(color, 2);

    expect(shades).toHaveLength(2);
    expect(shades[0]).toEqual({ hue: 10, saturation: 100, lightness: 60, alpha: 1 });
  });

  it('should generate shades for HSL string color', () => {
    const color = 'hsl(10, 100%, 60%)';
    const shades = generateShades(color, 4);

    expect(shades).toHaveLength(4);
    expect(shades[0]).toBe('hsl(10, 100%, 60%)');
  });

  it('should generate shades for RGB string color', () => {
    const color = 'rgba(255, 88, 51, 0.5)';
    const shades = generateShades(color);

    expect(shades).toHaveLength(10);
    expect(shades[0]).toBe('rgba(255, 88, 51, 0.5)');
  });

  it('should generate shades for HEX color', () => {
    const color = '#FF5833';
    const shades = generateShades(color, 5);

    expect(shades).toHaveLength(5);
    expect(shades[0]).toBe('#FF5833');
  });

  it('should throw error for invalid color formats', () => {
    expect(() => generateShades('invalidColor' as any, 3)).toThrowError();
    expect(() => generateShades(null as any, 3)).toThrowError();
    expect(() => generateShades(undefined as any, 3)).toThrowError();
    expect(() => generateShades({ red: 1321, green: 213 } as any, 3)).toThrowError();
  });
});
