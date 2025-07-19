export type RgbColor = {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
};

export type HslColor = {
  hue: number;
  saturation: number;
  lightness: number;
  alpha?: number;
};

export type Color = string | RgbColor | HslColor;

export type SupportedFormats = 'hex' | 'rgbString' | 'hslString' | 'rgb' | 'hsl';
