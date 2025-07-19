# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-07-19

### Added

- `randomRgb()`: Generates a random RGB color.
- `randomHsl()`: Generates a random HSL color.
- `randomHex()`: Generates a random HEX color string.
- `mix(color1, color2, weight)`: Mixes two colors together with a specified weight, supporting RGB, HSL, and HEX formats.

## [1.0.0] - 2025-07-16

Initial release of the color utility library, including color conversion, validation, and parsing functions with full TypeScript support.

### Added

#### Core Features

- **Color Conversion**: A comprehensive set of functions to convert between `HEX`, `RGB`, and `HSL` color models, including string and object representations.
- **Color Validation**: Utilities to validate if a given value is a valid `HEX`, `RGB`, or `HSL` color.
- **Color Parsing**: Functions to deconstruct color strings into their constituent parts (e.g., hue, alpha, channels).
- **Type Definitions**: Full TypeScript support with exported types for `RgbColor` and `HslColor`.

#### Conversion Functions

- `toRgb`
- `toRgbString`
- `toHsl`
- `toHslString`
- `toHex`
- `toCss`
- `rgbToHsl`
- `rgbToHex`
- `hslToRgb`
- `hslToHex`
- `hexToRgb`
- `hexToHsl`

#### Validation Functions

- `isRgb`
- `isHsl`
- `isHex`
- `isValid`

#### Parsing Functions

- `parseRgb`
- `parseHsl`
- `parseHex`
- `parseAlpha`
- `parseHue`
- `parseChannel`
