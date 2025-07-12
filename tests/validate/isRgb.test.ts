import { describe, it, expect } from 'vitest';
import { isRgb } from '../../src';

describe('isRgb', () => {
  it('should return true for valid RGB strings', () => {
    expect(isRgb('rgb(255, 0, 0)')).toBe(true);
    expect(isRgb('rgba(255, 0, 0, 1)')).toBe(true);
    expect(isRgb('rgb(123, 234, 45)')).toBe(true);
    expect(isRgb('rgba(123, 234, 45, 0.8)')).toBe(true);
    expect(isRgb('rgba(255,255,255,1)')).toBe(true);
    expect(isRgb('rgba(0,0,0,.5)')).toBe(true);
    expect(isRgb('rgb(100%, 50%, 0%)')).toBe(true);
    expect(isRgb('rgba(100%, 50%, 0%, 0.5)')).toBe(true);
    expect(isRgb('rgb(255 0 0)')).toBe(true);
    expect(isRgb('rgba(255 0 0 / 1)')).toBe(true);
    expect(isRgb('rgba(255 122 127 / 80%)')).toBe(true);
  });

  it('should return false for invalid RGB strings', () => {
    expect(isRgb('rgb(256, 0, 0)')).toBe(false);
    expect(isRgb('rgba(300, -10, 50)')).toBe(false);
    expect(isRgb('rgb(-1,-1,-1)')).toBe(false);
    expect(isRgb('rgba(-1,-1,-1,.5)')).toBe(false);
    expect(isRgb('rgb()')).toBe(false);
    expect(isRgb('rgba()')).toBe(false);
    expect(isRgb('rgba(sdfsdfsd)')).toBe(false);
    expect(isRgb('rgb(256,-10,-10)')).toBe(false);
    expect(isRgb('rgba(-10,-10,-10,.5)')).toBe(false);
    expect(isRgb('(-10,-10,-10,.5)')).toBe(false);
    expect(isRgb('-10,-10,-10,.5%%')).toBe(false);
    expect(isRgb('-10,-10,-10,.5%')).toBe(false);
  });

  it('should return true for valid RGB objects', () => {
    expect(isRgb({ red: 255, green: 0, blue: 0 })).toBe(true);
    expect(isRgb({ red: 0, green: 255, blue: 0 })).toBe(true);
    expect(isRgb({ red: 0, green: 0, blue: 255 })).toBe(true);
    expect(isRgb({ red: 255, green: 255, blue: 255 })).toBe(true);
    expect(isRgb({ red: 0, green: 0, blue: 0 })).toBe(true);
    expect(isRgb({ red: 123, green: 234, blue: 45, alpha: 0.8 })).toBe(true);
    expect(isRgb({ red: 255, green: 0, blue: 0, alpha: 1 })).toBe(true);
  });

  it('should return false for invalid RGB objects', () => {
    expect(isRgb({ red: 256, green: 0, blue: 0 })).toBe(false);
    expect(isRgb({ red: -1, green: 0, blue: 0 })).toBe(false);
    expect(isRgb({ red: 0, green: 256, blue: 0 })).toBe(false);
    expect(isRgb({ red: 0, green: -1, blue: 0 })).toBe(false);
    expect(isRgb({ red: 0, green: 0, blue: 256 })).toBe(false);
    expect(isRgb({ red: 0, green: 0, blue: -1 })).toBe(false);
    expect(isRgb({ red: 123, green: 234, blue: 45, alpha: -0.1 })).toBe(false);
    expect(isRgb({ red: 123, green: 234, blue: 45, alpha: 1.5 })).toBe(false);
    expect(isRgb({ red: 'red', green: 'green', blue: 'blue', alpha: '100' })).toBe(false);
    expect(isRgb({})).toBe(false);
    expect(isRgb(null)).toBe(false);
    expect(isRgb(undefined)).toBe(false);
  });
});
