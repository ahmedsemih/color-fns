import { describe, it, expect } from 'vitest';
import { generateTones } from '../../src';

describe('generateTones', () => {
  it('should generate tones for RGB color', () => {
    const color = { red: 255, green: 88, blue: 51 };
    const tones = generateTones(color, 3);

    expect(tones).toHaveLength(3);
    expect(tones[0]).toEqual({ red: 255, green: 88, blue: 51 });
  });

  it('should generate tones for HSL color', () => {
    const color = { hue: 10, saturation: 100, lightness: 60, alpha: 1 };
    const tones = generateTones(color, 2);

    expect(tones).toHaveLength(2);
    expect(tones[0]).toEqual({ hue: 10, saturation: 100, lightness: 60, alpha: 1 });
  });

  it('should generate tones for HSL string color', () => {
    const color = 'hsl(10, 100%, 60%)';
    const tones = generateTones(color, 4);

    expect(tones).toHaveLength(4);
    expect(tones[0]).toBe('hsl(10, 100%, 60%)');
  });

  it('should generate tones for RGB string color', () => {
    const color = 'rgba(255, 88, 51, 0.5)';
    const tones = generateTones(color);

    expect(tones).toHaveLength(10);
    expect(tones[0]).toBe('rgba(255, 88, 51, 0.5)');
  });

  it('should generate tones for HEX color', () => {
    const color = '#FF5833';
    const tones = generateTones(color, 5);

    expect(tones).toHaveLength(5);
    expect(tones[0]).toBe('#FF5833');
  });

  it('should throw error for invalid color formats', () => {
    expect(() => generateTones('invalidColor' as any, 3)).toThrowError();
    expect(() => generateTones(null as any, 3)).toThrowError();
    expect(() => generateTones(undefined as any, 3)).toThrowError();
    expect(() => generateTones({ red: 1321, green: 213 } as any, 3)).toThrowError();
  });
});
