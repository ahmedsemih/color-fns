<div align="center">

# color-fns

![Npm Version](https://img.shields.io/npm/v/@ahmedsemih/color-fns.svg)
![Bundle Size](https://img.shields.io/bundlephobia/min/@ahmedsemih/color-fns)
![Types Included](https://img.shields.io/npm/types/@ahmedsemih/color-fns)
![Downloads](https://img.shields.io/npm/dt/@ahmedsemih/color-fns)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

**Modern, lightweight, and zero-dependency JavaScript & TypeScript color utility library. Effortlessly convert, validate, manipulate, parse and generate colors in popular formats like RGB, HEX, and HSL. Tree-shakable and optimized for minimal bundle size perfect for web and Node.js projects.**

</div>

## ⚡ Features

- 🎨 **Convert** between HEX, RGB & HSL easily
- ✨ **Supports** modern CSS color formats & units (`deg`, `rad`, `turn`, `grad`)
- 🔒 **Type-safe** with full TypeScript support
- 🧩 **Zero dependencies**, tiny & fast
- 🌳 **Tree-shakable**, import only what you use
- ✅ **Validate** colors with simple checks
- 🎲 **Generate** random colors in RGB, HSL, or HEX
- 🛠️ **Manipulate** colors effortlessly
- 🎯 **Consistent API**, easy to learn & use

## 🛠️ Installation

```bash
# Using npm
npm install @ahmedsemih/color-fns

# Using yarn
yarn add @ahmedsemih/color-fns

# Using pnpm
pnpm add @ahmedsemih/color-fns
```

## 🚀 Usage

```js
// ESM
import { toRgb } from '@ahmedsemih/color-fns';

// CommonJS
const { toRgb } = require('@ahmedsemih/color-fns');

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

#### Generate

- [randomRgb](#randomRgb)
- [randomHsl](#randomHsl)
- [randomHex](#randomHex)
- [generateShades](#generateShades)
- [generateTints](#generateTints)
- [generateTones](#generateTones)

### Manipulate

- [mix](#mix)
- [lighten](#lighten)
- [darken](#darken)
- [saturate](#saturate)
- [desaturate](#desaturate)
- [grayscale](#grayscale)
- [invert](#invert)
- [setAlpha](#setAlpha)

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
- [Color](#Color)

## 📚 API Reference

### 🔄 Convert

Converts colors between different formats (RGB, HSL, HEX).

#### <a id="toRgb"></a>`toRgb(color: string | RgbColor | HslColor): RgbColor`

Converts a color to an RGB object.

```js
import { toRgb } from '@ahmedsemih/color-fns';

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
import { toRgbString } from '@ahmedsemih/color-fns';

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
import { toHsl } from '@ahmedsemih/color-fns';

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
import { toHslString } from '@ahmedsemih/color-fns';

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
import { toHex } from '@ahmedsemih/color-fns';

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
import { toCss } from '@ahmedsemih/color-fns';

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
import { rgbToHsl } from '@ahmedsemih/color-fns';

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
import { rgbToHex } from '@ahmedsemih/color-fns';

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
import { hslToRgb } from '@ahmedsemih/color-fns';

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
import { hslToHex } from '@ahmedsemih/color-fns';

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
import { hexToRgb } from '@ahmedsemih/color-fns';

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
import { hexToHsl } from '@ahmedsemih/color-fns';

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
import { isRgb } from '@ahmedsemih/color-fns';

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
import { isHsl } from '@ahmedsemih/color-fns';

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
import { isHex } from '@ahmedsemih/color-fns';

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
import { isValid } from '@ahmedsemih/color-fns';

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

### 🎲 Generate

Generates random colors in RGB, HSL, or HEX formats.

#### <a id="randomRgb"></a>`randomRgb(): RgbColor`

Generates a random RGB color object.

```js
import { randomRgb } from '@ahmedsemih/color-fns';

randomRgb();
// { red: 34, green: 67, blue: 89 }
```

#### <a id="randomHsl"></a>`randomHsl(): HslColor`

Generates a random HSL color object.

```js
import { randomHsl } from '@ahmedsemih/color-fns';

randomHsl();
// { hue: 240, saturation: 67, lightness: 89 }
```

#### <a id="randomHex"></a>`randomHex(): string`

Generates a random HEX color string.

```js
import { randomHex } from '@ahmedsemih/color-fns';

randomHex();
// '#ff8000'
```

#### <a id="generateShades"></a>`generateShades(color: Color, count?: number): Color[]`

Generates an array of shades for a given color. Shades are darker variations of the base color.

```js
import { generateShades } from '@ahmedsemih/color-fns';

generateShades('#FF8000', 3);
// ['#FF8000', '#AA5500', '#552A00']
generateShades('rgb(255, 128, 0)', 3);
// ['rgb(255, 128, 0)', 'rgb(170, 85, 0)', 'rgb(85, 42, 0)']
generateShades('hsl(30, 100%, 50%)', 5);
// ['hsl(30, 100%, 50%)', 'hsl(30, 100%, 40%)', 'hsl(30, 100%, 30%)', 'hsl(30, 100%, 20%)', 'hsl(30, 100%, 10%)']
generateShades({ red: 255, green: 128, blue: 0 }, 2);
// [{ red: 255, green: 128, blue: 0 }, { red: 128, green: 64, blue: 0 }]
generateShades({ hue: 30, saturation: 100, lightness: 60 }, 3);
// [{ hue: 30, saturation: 100, lightness: 60 }, { hue: 30, saturation: 100, lightness: 40 }, { hue: 30, saturation: 100, lightness: 20 }]
```

#### <a id="generateTints"></a>`generateTints(color: Color, count?: number): Color[]`

Generates an array of tints for a given color. Tints are lighter variations of the base color.

```js
import { generateTints } from '@ahmedsemih/color-fns';

generateTints('#ff8000', 3);
// ['#FF8000', '#FFAA55', '#FFD5AA']
generateTints('rgb(255, 128, 0)', 2);
// ['rgb(255, 128, 0)', 'rgb(255, 191, 128)']
generateTints('hsl(30, 100%, 50%)', 4);
// ['hsl(30, 100%, 50%)', 'hsl(30, 100%, 62.5%)', 'hsl(30, 100%, 75%)', 'hsl(30, 100%, 87.5%)']
generateTints({ red: 255, green: 128, blue: 0 }, 2);
// [{ red: 255, green: 128, blue: 0 }, { red: 255, green: 191, blue: 128 }]
generateTints({ hue: 30, saturation: 100, lightness: 60 }, 3);
// [{ hue: 30, saturation: 100, lightness: 60 }, { hue: 30, saturation: 100, lightness: 80 }, { hue: 30, saturation: 100, lightness: 100 }]
```

#### <a id="generateTones"></a>`generateTones(color: Color, count?: number): Color[]`

Generates an array of tones for a given color. Tones are variations of the base color with added gray.

```js
import { generateTones } from '@ahmedsemih/color-fns';

generateTones('#FF8000', 3);
// ['#FF8000', '#D4802B', '#AA8055']
generateTones('rgb(255, 128, 0)', 2);
// ['rgb(255, 128, 0)', 'rgb(191, 128, 64)']
generateTones('hsl(30, 100%, 50%)', 4);
// ['hsl(30, 100%, 50%)', 'hsl(30, 75%, 50%)', 'hsl(30, 50%, 50%)', 'hsl(30, 25%, 50%)']
generateTones({ red: 255, green: 128, blue: 0 }, 2);
// [{ red: 255, green: 128, blue: 0 }, { red: 191, green: 128, blue: 64 }]
generateTones({ hue: 30, saturation: 90, lightness: 50 }, 3);
// [{ hue: 30, saturation: 90, lightness: 50 }, { hue: 30, saturation: 60, lightness: 50 }, { hue: 30, saturation: 30, lightness: 50 }]
```

### 🛠️ Manipulate

Manipulates colors by mixing, lightening, darkening, saturating, desaturating, converting to grayscale, inverting, and setting alpha values.

#### <a id="mix"></a>`mix(color1: Color, color2: Color, weight?: number): Color`

Mixes two colors together based on a specified weight. Default weight is 0.5 (equal mix).
Returns a new color in the same format as the first color.

```js
import { mix } from '@ahmedsemih/color-fns';

mix('rgb(255, 0, 0)', 'rgb(0, 0, 255)');
// 'rgb(128, 0, 128)'
mix('hsl(120, 100%, 50%)', 'hsl(240, 100%, 50%)');
// 'hsl(180, 100%, 25%)'
mix('#ff8000', '#0080ff', 0.25);
// '#4080BF'
mix({ red: 255, green: 0, blue: 0 }, { hue: 240, saturation: 100, lightness: 50 });
// { red: 128, green: 0, blue: 128, alpha: 1 }
mix({ hue: 120, saturation: 100, lightness: 50 }, { red: 0, green: 0, blue: 255 }, 0.75);
// { hue: 140, saturation: 100, lightness: 37, alpha: 1 }
```

#### <a id="lighten"></a>`lighten(color: Color, amount: number): Color`

Lightens a color by a specified amount (0-100). Returns a new color in the same format as the input.

```js
import { lighten } from '@ahmedsemih/color-fns';

lighten('rgb(100, 150, 200)', 0.2);
// 'rgb(176, 201, 227)'
lighten('hsl(200, 50%, 50%)', 0.2);
// 'hsl(200, 50%, 70%)'
lighten('#6496c8', 20);
// '#B0C9E3'
lighten({ red: 100, green: 150, blue: 200 }, 20);
// { red: 176, green: 201, blue: 227 }
lighten({ hue: 200, saturation: 50, lightness: 50 }, 20);
// { hue: 200, saturation: 50, lightness: 70 }
```

#### <a id="darken"></a>`darken(color: Color, amount: number): Color`

Darkens a color by a specified amount (0-100). Returns a new color in the same format as the input.

```js
import { darken } from '@ahmedsemih/color-fns';

darken('rgb(100, 150, 200)', 0.2);
// 'rgb(52, 99, 147)'
darken('hsl(200, 50%, 50%)', 20);
// 'hsl(200, 50%, 30%)'
darken('#6496c8', 20);
// '#346393'
darken({ red: 100, green: 150, blue: 200 }, 0.2);
// { red: 52, green: 99, blue: 147 }
darken({ hue: 200, saturation: 50, lightness: 50 }, 0.2);
// { hue: 200, saturation: 50, lightness: 30 }
```

#### <a id="saturate"></a>`saturate(color: Color, amount: number): Color`

Increases the saturation of a color by a specified amount (0-100). Returns a new color in the same format as the input.

```js
import { saturate } from '@ahmedsemih/color-fns';

saturate('rgb(100, 150, 200)', 0.2);
// 'rgb(79, 150, 222)'
saturate('hsl(200, 50%, 50%)', 20);
// 'hsl(200, 70%, 50%)'
saturate('#6496c8', 20);
// '#4F96DE'
saturate({ red: 100, green: 150, blue: 200 }, 20);
// { red: 79, green: 150, blue: 222 }
saturate({ hue: 200, saturation: 50, lightness: 50 }, 20);
// { hue: 200, saturation: 70, lightness: 50 }
```

#### <a id="desaturate"></a>`desaturate(color: Color, amount: number): Color`

Decreases the saturation of a color by a specified amount (0-100). Returns a new color in the same format as the input.

```js
import { desaturate } from '@ahmedsemih/color-fns';

desaturate('rgb(100, 150, 200)', 20);
// 'rgb(121, 150, 180)'
desaturate('hsl(200, 50%, 50%)', 20);
// 'hsl(200, 30%, 50%)'
desaturate('#6496c8', 0.2);
// '#7996B4'
desaturate({ red: 100, green: 150, blue: 200 }, 0.2);
// { red: 121, green: 150, blue: 180 }
desaturate({ hue: 200, saturation: 50, lightness: 50 }, 20);
// { hue: 200, saturation: 30, lightness: 50 }
```

#### <a id="grayscale"></a>`grayscale(color: Color): Color`

Converts a color to grayscale. Returns a new color in the same format as the input.

```js
import { grayscale } from '@ahmedsemih/color-fns';

grayscale('rgb(100, 150, 200)');
// 'rgb(150, 150, 150)'
grayscale('hsl(210, 50%, 50%)');
// 'hsl(210, 0%, 50%)'
grayscale('#6496c8');
// '#969696'
grayscale({ red: 100, green: 150, blue: 200 });
// { red: 150, green: 150, blue: 150 }
grayscale({ hue: 210, saturation: 50, lightness: 50 });
// { hue: 210, saturation: 0, lightness: 50 }
```

#### <a id="invert"></a>`invert(color: Color): Color`

Inverts a color to its complementary color. Returns a new color in the same format as the input.

```js
import { invert } from '@ahmedsemih/color-fns';

invert('rgb(255, 0, 0)');
// 'rgb(0, 255, 255)'
invert('hsl(0, 100%, 50%)');
// 'hsl(180, 100%, 50%)'
invert('#ff0000');
// '#00FFFF'
invert({ red: 255, green: 0, blue: 0 });
// { red: 0, green: 255, blue: 255 }
invert({ hue: 0, saturation: 100, lightness: 50 });
// { hue: 180, saturation: 100, lightness: 50 }
```

#### <a id="setAlpha"></a>`setAlpha(color: Color, alpha: number): Color`

Sets the alpha (opacity) of a color. Returns a new color in the same format as the input.

```js
import { setAlpha } from '@ahmedsemih/color-fns';

setAlpha('rgb(255, 0, 0)', 0.5);
// 'rgba(255, 0, 0, 0.5)'
setAlpha('hsl(0, 100%, 50%)', 0.75);
// 'hsla(0, 100%, 50%, 0.75)'
setAlpha('#ff0000', 0.3);
// '#ff00004c'
setAlpha({ red: 255, green: 0, blue: 0 }, 0.8);
// { red: 255, green: 0, blue: 0, alpha: 0.8 }
setAlpha({ hue: 0, saturation: 100, lightness: 50 }, 0.6);
// { hue: 0, saturation: 100, lightness: 50, alpha: 0.6 }
```

### 🔍 Parse

Parse functions convert color strings into structured, easy-to-use object representations.

#### <a id="parseRgb"></a>`parseRgb(color: string): RgbColor`

Parses an RGB color string into an `RgbColor` object.

```js
import { parseRgb } from '@ahmedsemih/color-fns';

parseRgb('rgb(255, 128, 0)');
// { red: 255, green: 128, blue: 0 }
parseRgb('rgba(255, 128, 0, 0.5)');
// { red: 255, green: 128, blue: 0, alpha: 0.5 }
```

#### <a id="parseHsl"></a>`parseHsl(color: string): HslColor`

Parses an HSL color string into an `HslColor` object.

```js
import { parseHsl } from '@ahmedsemih/color-fns';

parseHsl('hsl(30, 100%, 50%)');
// { hue: 30, saturation: 100, lightness: 50 }
parseHsl('hsla(30, 100%, 50%, 0.5)');
// { hue: 30, saturation: 100, lightness: 50, alpha: 0.5 }
```

#### <a id="parseHex"></a>`parseHex(color: string): RgbColor`

Parses a hexadecimal color string into an `RgbColor` object.

```js
import { parseHex } from '@ahmedsemih/color-fns';

parseHex('#ff8000');
// { red: 255, green: 128, blue: 0 }
parseHex('#ff8000cc');
// { red: 255, green: 128, blue: 0, alpha: 0.8 }
```

#### <a id="parseAlpha"></a>`parseAlpha(alpha: string | number): number`

Parses an alpha value from a string or number into a normalized float between 0 and 1.

```js
import { parseAlpha } from '@ahmedsemih/color-fns';

parseAlpha('0.5'); // 0.5
parseAlpha('50%'); // 0.5
parseAlpha(0.75); // 0.75
```

#### <a id="parseHue"></a>`parseHue(hue: string | number): number`

Parses a hue value from a string or number into a normalized float between 0 and 360.

```js
import { parseHue } from '@ahmedsemih/color-fns';

parseHue('180deg'); // 180
parseHue('3.14rad'); // 180
parseHue('0.5turn'); // 180
parseHue('90grad'); // 81
parseHue(180); // 180
```

#### <a id="parseChannel"></a>`parseChannel(channel: string | number): number`

Parses a color channel value from a string or number into a normalized integer between 0 and 255.

```js
import { parseChannel } from '@ahmedsemih/color-fns';

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

#### <a id="Color"></a>`Color`

A union type representing any color format (RGB, HSL, HEX).

```ts
type Color = RgbColor | HslColor | string; // string for HEX or CSS
```

## 🤝 Contributing

Contributions are welcome! Found a bug or have an idea?
Check out [contributing guideline](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
