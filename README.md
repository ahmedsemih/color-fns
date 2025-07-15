<div align="center">

# color-kit

![Npm Version](https://img.shields.io/npm/v/color-kit.svg)
![Bundle Size](https://img.shields.io/bundlephobia/min/color-kit)
![Types Included](https://img.shields.io/npm/types/color-kit)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

**Modern, lightweight, and zero-dependency JavaScript & TypeScript color utility library. Effortlessly convert, validate, and parse colors in popular formats like RGB, HEX, and HSL. Tree-shakable and optimized for minimal bundle size perfect for web and Node.js projects.**

</div>

## ⚡ Features

- 🎨 **Convert** between HEX, RGB & HSL easily
- ✨ **Supports** modern CSS color formats & units (`deg`, `rad`, `turn`, `grad`)
- 🔒 **Type-safe** with full TypeScript support
- 🧩 **Zero dependencies**, tiny & fast
- 🌳 **Tree-shakable**, import only what you use
- ✅ **Validate** colors with simple checks
- 🎯 **Consistent API**, easy to learn & use

## 🛠️ Installation

```bash
# Using npm
npm install color-kit

# Using yarn
yarn add color-kit

# Using pnpm
pnpm add color-kit
```

## 🚀 Usage

```js
// ESM
import { toRgb } from 'color-kit';

// CommonJS
const { toRgb } = require('color-kit');

const rgb = toRgb('#ff8000');
```

## 📑 Table of Contents

#### Convert

- [toRgb](#toRgb)
- [toRgbString](#toRgbString)
- [toHsl](#toHsl)
- [toHslString](#toHslString)
- [toHex](#toHex)
- [toCss](#toCss)
- [rgbToHsl](#rgbToHsl)
- [rgbToHex](#rgbToHex)
- [hslToRgb](#hslToRgb)
- [hslToHex](#hslToHex)
- [hexToRgb](#hexToRgb)
- [hexToHsl](#hexToHsl)

#### Validate

- [isRgb](#isRgb)
- [isHsl](#isHsl)
- [isHex](#isHex)
- [isValid](#isValid)

#### Parse

- [parseRgb](#parseRgb)
- [parseHsl](#parseHsl)
- [parseHex](#parseHex)
- [parseAlpha](#parseAlpha)
- [parseHue](#parseHue)
- [parseChannel](#parseChannel)

#### Types

- [RgbColor](#RgbColor)
- [HslColor](#HslColor)

## 📚 API Reference

### 🔄 Convert

Converts colors between different formats (RGB, HSL, HEX).

#### <a id="toRgb"></a>`toRgb(color: string | RgbColor | HslColor): RgbColor`

Converts a color to an RGB object.

```js
import { toRgb } from 'color-kit';

toRgb('#ff8000');
// { red: 255, green: 128, blue: 0 }
toRgb('#ff8000cc');
// { red: 255, green: 128, blue: 0, alpha: 0.8 }
toRgb('hsl(30, 100%, 50%)');
// { red: 255, green: 128, blue: 0 }
toRgb({ hue: 30, saturation: 100, lightness: 50 });
// { red: 255, green: 128, blue: 0 }
toRgb({ hue: 30, saturation: 100, lightness: 50, alpha: 0.5 });
// { red: 255, green: 128, blue: 0, alpha: 0.5 }
```

#### <a id="toRgbString"></a>`toRgbString(color: string | RgbColor | HslColor): string`

Converts a color to CSS-compatible RGB string.

```js
import { toRgbString } from 'color-kit';

toRgbString('#ff8000');
// 'rgb(255, 128, 0)'
toRgbString('#ff8000cc');
// 'rgba(255, 128, 0, 0.8)'
toRgbString('hsl(30, 100%, 50%)');
// 'rgb(255, 128, 0)'
toRgbString({ hue: 30, saturation: 100, lightness: 50 });
// 'rgb(255, 128, 0)'
toRgbString({ hue: 30, saturation: 100, lightness: 50, alpha: 0.5 });
// 'rgba(255, 128, 0, 0.5)'
```

#### <a id="toHsl"></a>`toHsl(color: string | RgbColor | HslColor): HslColor`

Converts a color to an HSL object.

```js
import { toHsl } from 'color-kit';

toHsl('#ff8000');
// { hue: 30, saturation: 100, lightness: 50 }
toHsl('#ff8000cc');
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.8 }
toHsl('rgb(255, 128, 0)');
// { hue: 30, saturation: 100, lightness: 50 }
toHsl({ red: 255, green: 128, blue: 0 });
// { hue: 30, saturation: 100, lightness: 50 }
toHsl({ red: 255, green: 128, blue: 0, alpha: 0.5 });
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.5 }
```

#### <a id="toHslString"></a>`toHslString(color: string | RgbColor | HslColor): string`

Converts a color to CSS-compatible HSL string.

```js
import { toHslString } from 'color-kit';

toHslString('#ff8000');
// 'hsl(30, 100%, 50%)'
toHslString('#ff8000cc');
// 'hsla(30, 100%, 50%, 0.8)'
toHslString('rgb(255, 128, 0)');
// 'hsl(30, 100%, 50%)'
toHslString({ red: 255, green: 128, blue: 0 });
// 'hsl(30, 100%, 50%)'
toHslString({ red: 255, green: 128, blue: 0, alpha: 0.5 });
// 'hsla(30, 100%, 50%, 0.5)'
```

#### <a id="toHex"></a>`toHex(color: string | RgbColor | HslColor): string`

Converts a color to CSS-compatible HEX string.

```js
import { toHex } from 'color-kit';

toHex('rgb(255, 128, 0)');
// '#ff8000'
toHex({ red: 255, green: 128, blue: 0 });
// '#ff8000'
toHex({ red: 255, green: 128, blue: 0, alpha: 0.5 });
// '#ff8000cc'
toHex('hsl(30, 100%, 50%)');
// '#ff8000'
toHex({ hue: 30, saturation: 100, lightness: 50 });
// '#ff8000'
toHex({ hue: 30, saturation: 100, lightness: 50, alpha: 0.5 });
// '#ff8000cc'
```

#### <a id="toCss"></a>`toCss(color: RgbColor | HslColor): string`

Converts a color to a CSS-compatible string (RGB, HSL, or HEX).

```js
import { toCss } from 'color-kit';

toCss({ red: 255, green: 128, blue: 0 });
// 'rgb(255, 128, 0)'
toCss({ red: 255, green: 128, blue: 0, alpha: 0.5 });
// 'rgba(255, 128, 0, 0.5)'
toCss({ hue: 30, saturation: 100, lightness: 50 });
// 'hsl(30, 100%, 50%)'
toCss({ hue: 30, saturation: 100, lightness: 50, alpha: 0.5 });
// 'hsla(30, 100%, 50%, 0.5)'
```

#### <a id="rgbToHsl"></a>`rgbToHsl(color: string | RgbColor): HslColor`

Converts an RGB object or string to an HSL object.

```js
import { rgbToHsl } from 'color-kit';

rgbToHsl('rgb(255, 128, 0)');
// { hue: 30, saturation: 100, lightness: 50 }
rgbToHsl('rgba(255, 128, 0, 0.5)');
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.5 }
rgbToHsl({ red: 255, green: 128, blue: 0 });
// { hue: 30, saturation: 100, lightness: 50 }
rgbToHsl({ red: 255, green: 128, blue: 0, alpha: 0.5 });
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.5 }
```

#### <a id="rgbToHex"></a>`rgbToHex(color: string | RgbColor): string`

Converts an RGB object or string to a HEX string.

```js
import { rgbToHex } from 'color-kit';

rgbToHex('rgb(255, 128, 0)');
// '#ff8000'
rgbToHex('rgba(255, 128, 0, 0.5)');
// '#ff8000cc'
rgbToHex({ red: 255, green: 128, blue: 0 });
// '#ff8000'
rgbToHex({ red: 255, green: 128, blue: 0, alpha: 0.5 });
// '#ff8000cc'
```

#### <a id="hslToRgb"></a>`hslToRgb(color: string | HslColor): RgbColor`

Converts an HSL object or string to an RGB object.

```js
import { hslToRgb } from 'color-kit';

hslToRgb('hsl(30, 100%, 50%)');
// { red: 255, green: 128, blue: 0 }
hslToRgb('hsla(30, 100%, 50%, 0.5)');
// { red: 255, green: 128, blue: 0, alpha: 0.5 }
hslToRgb({ hue: 30, saturation: 100, lightness: 50 });
// { red: 255, green: 128, blue: 0 }
hslToRgb({ hue: 30, saturation: 100, lightness: 50, alpha: 0.5 });
// { red: 255, green: 128, blue: 0, alpha: 0.5 }
```

#### <a id="hslToHex"></a>`hslToHex(color: string | HslColor): string`

Converts an HSL object or string to a HEX string.

```js
import { hslToHex } from 'color-kit';

hslToHex('hsl(30, 100%, 50%)');
// '#ff8000'
hslToHex('hsla(30, 100%, 50%, 0.5)');
// '#ff8000cc'
hslToHex({ hue: 30, saturation: 100, lightness: 50 });
// '#ff8000'
hslToHex({ hue: 30, saturation: 100, lightness: 50, alpha: 0.5 });
// '#ff8000cc'
```

#### <a id="hexToRgb"></a>`hexToRgb(color: string): RgbColor`

Converts a HEX string to an RGB object.

```js
import { hexToRgb } from 'color-kit';

hexToRgb('#ff8000');
// { red: 255, green: 128, blue: 0 }
hexToRgb('#ff8000cc');
// { red: 255, green: 128, blue: 0, alpha: 0.8 }
hexToRgb('#f80');
// { red: 255, green: 128, blue: 0 }
hexToRgb('#f80c');
// { red: 255, green: 128, blue: 0, alpha: 0.8 }
```

#### <a id="hexToHsl"></a>`hexToHsl(color: string): HslColor`

Converts a HEX string to an HSL object.

```js
import { hexToHsl } from 'color-kit';

hexToHsl('#ff8000');
// { hue: 30, saturation: 100, lightness: 50 }
hexToHsl('#ff8000cc');
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.8 }
hexToHsl('#f80');
// { hue: 30, saturation: 100, lightness: 50 }
hexToHsl('#f80c');
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.8 }
```

### ✅ Validate

Validates color strings and objects to ensure they are valid RGB, HSL, or HEX colors.

#### <a id="isRgb"></a>`isRgb(value: unknown): boolean`

Checks if value is a valid RGB color.

```js
import { isRgb } from 'color-kit';

isRgb('rgb(255, 0, 0)');
// true
isRgb('rgba(0, 255, 0, 50%)');
// true
isRgb('rgb(30% 20% 50%)');
// true
isRgb('rgb(255 122 127 / 80%)');
// true
isRgb({ red: 0, green: 0, blue: 255 });
// true
isRgb({ red: 255, green: 0, blue: 0, alpha: 0.5 });
// true

isRgb('rgb(300, 0, 0)');
// false (invalid red value)
isRgb({ red: 255, green: 0 });
// false (missing blue)
isRgb('rgb(255, 0, 0, 1.5)');
// false (invalid alpha value)
```

#### <a id="isHsl"></a>`isHsl(value: unknown): boolean`

Checks if value is a valid HSL color.

```js
import { isHsl } from 'color-kit';

isHsl('hsl(120, 100%, 50%)');
// true
isHsl('hsla(120, 100%, 50%, 0.5)');
// true
isHsl('hsl(120deg 100% 50%)');
// true
isHsl('hsl(0.3turn 60% 45% / 0.7)');
// true
isHsl({ hue: 120, saturation: 100, lightness: 50 });
// true
isHsl({ hue: 120, saturation: 100, lightness: 50, alpha: 0.5 });
// true

isHsl('hsl(400, 100%, 50%)');
// false (invalid hue value)
isHsl({ hue: 120, saturation: 100 });
// false (missing lightness)
isHsl('hsl(120, 100%, 50%, 1.5)');
// false (invalid alpha value)
```

#### <a id="isHex"></a>`isHex(value: unknown): boolean`

Checks if value is a valid HEX color.

```js
import { isHex } from 'color-kit';

isHex('#ff8000');
// true
isHex('#f80');
// true (short hex)
isHex('#f80c');
// true (short hex with alpha)
isHex('#ff8000ff');
// true (full hex with alpha)

isHex('ff8000');
// false (missing #)
isHex('#ff8000g');
// false (invalid character)
isHex('rgb(255, 0, 0)');
// false (not a hex string)
```

#### <a id="isValid"></a>`isValid(value: unknown): boolean`

Checks if value is a valid color in any supported format (RGB, HSL, HEX).

```js
import { isValid } from 'color-kit';

isValid('rgb(255, 0, 0)');
// true
isValid('hsl(120, 100%, 50%)');
// true
isValid('#ff8000');
// true
isValid({ red: 255, green: 0, blue: 0 });
// true
isValid({ hue: 120, saturation: 100, lightness: 50 });
// true

isValid('invalid color');
// false
isValid('rgb(300, 0, 0)');
// false (invalid RGB)
isValid('hsl(400, 100%, 50%)');
// false (invalid HSL)
isValid('#ff8000g');
// false (invalid HEX)
```

### 🔍 Parse

Parse functions convert color strings into structured, easy-to-use object representations.

#### <a id="parseRgb"></a>`parseRgb(color: string): RgbColor`

Parses an RGB color string into an `RgbColor` object.

```js
import { parseRgb } from 'color-kit';

parseRgb('rgb(255, 128, 0)');
// { red: 255, green: 128, blue: 0 }
parseRgb('rgba(255, 128, 0, 0.5)');
// { red: 255, green: 128, blue: 0, alpha: 0.5 }
```

#### <a id="parseHsl"></a>`parseHsl(color: string): HslColor`

Parses an HSL color string into an `HslColor` object.

```js
import { parseHsl } from 'color-kit';

parseHsl('hsl(30, 100%, 50%)');
// { hue: 30, saturation: 100, lightness: 50 }
parseHsl('hsla(30, 100%, 50%, 0.5)');
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.5 }
```

#### <a id="parseHex"></a>`parseHex(color: string): RgbColor`

Parses a hexadecimal color string into an `RgbColor` object.

```js
import { parseHex } from 'color-kit';

parseHex('#ff8000');
// { red: 255, green: 128, blue: 0 }
parseHex('#ff8000cc');
// { red: 255, green: 128, blue: 0, alpha: 0.8 }
```

#### <a id="parseAlpha"></a>`parseAlpha(alpha: string | number): number`

Parses an alpha value from a string or number into a normalized float between 0 and 1.

```js
import { parseAlpha } from 'color-kit';

parseAlpha('0.5'); // 0.5
parseAlpha('50%'); // 0.5
parseAlpha(0.75); // 0.75
```

#### <a id="parseHue"></a>`parseHue(hue: string | number): number`

Parses a hue value from a string or number into a normalized float between 0 and 360.

```js
import { parseHue } from 'color-kit';

parseHue('180deg'); // 180
parseHue('3.14rad'); // 180
parseHue('0.5turn'); // 180
parseHue('90grad'); // 81
parseHue(180); // 180
```

#### <a id="parseChannel"></a>`parseChannel(channel: string | number): number`

Parses a color channel value from a string or number into a normalized integer between 0 and 255.

```js
import { parseChannel } from 'color-kit';

parseChannel('128'); // 128
parseChannel('50%'); // 128
parseChannel(128); // 128
```

### 📐 Types

#### <a id="RgbColor"></a>`RgbColor`

An object representing an RGB color.

```ts
type RgbColor = {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
};
```

#### <a id="HslColor"></a>`HslColor`

An object representing an HSL color.

```ts
type HslColor = {
  hue: number;
  saturation: number;
  lightness: number;
  alpha?: number;
};
```

## 🤝 Contributing

Contributions are welcome! Found a bug or have an idea?
Check out [contributing guideline](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
