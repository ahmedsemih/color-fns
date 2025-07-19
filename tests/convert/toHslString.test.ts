import { describe, it, expect } from 'vitest';
import { toHslString } from '../../src';

describe('toHslString', () => {
  it('should convert RGB object to HSL', () => {
    expect(toHslString({ red: 125, green: 200, blue: 80 })).toEqual('hsl(98, 52%, 55%)');
    expect(toHslString({ red: 40, green: 41, blue: 115 })).toEqual('hsl(239, 48%, 30%)');
    expect(toHslString({ red: 255, green: 0, blue: 0, alpha: 0.5 })).toEqual(
      'hsla(0, 100%, 50%, 0.5)'
    );
  });

  it('should convert RGB string to HSL', () => {
    expect(toHslString('rgb(125, 200, 80)')).toEqual('hsl(98, 52%, 55%)');
    expect(toHslString('rgb(40, 41, 115)')).toEqual('hsl(239, 48%, 30%)');
    expect(toHslString('rgba(255, 0, 0, 0.5)')).toEqual('hsla(0, 100%, 50%, 0.5)');
  });

  it('should convert HSL object to HSL', () => {
    expect(toHslString({ hue: 120, saturation: 100, lightness: 50 })).toEqual(
      'hsl(120, 100%, 50%)'
    );
    expect(toHslString({ hue: 240, saturation: 100, lightness: 50, alpha: 0.5 })).toEqual(
      'hsla(240, 100%, 50%, 0.5)'
    );
  });

  it('should convert HSL string to HSL', () => {
    expect(toHslString('hsl(120, 100%, 50%)')).toEqual('hsl(120, 100%, 50%)');
    expect(toHslString('hsl(240, 100%, 50%, 0.5)')).toEqual('hsla(240, 100%, 50%, 0.5)');
  });

  it('should convert hex string to HSL', () => {
    expect(toHslString('#ff0000')).toEqual('hsl(0, 100%, 50%)');
    expect(toHslString('#00ff00')).toEqual('hsl(120, 100%, 50%)');
    expect(toHslString('#0000ff')).toEqual('hsl(240, 100%, 50%)');
    expect(toHslString('#ff000080')).toEqual('hsla(0, 100%, 50%, 0.5)');
  });

  it('should throw an error for invalid input', () => {
    expect(() => toHslString('invalid')).toThrow('Invalid color format');
    expect(() => toHslString(123 as any)).toThrow('Invalid color format');
    expect(() => toHslString({ red: 255, green: 255 } as any)).toThrow('Invalid color format');
    expect(() => toHslString({} as any)).toThrow('Invalid color format');
    expect(() => toHslString(null as any)).toThrow('Invalid color format');
  });
});
