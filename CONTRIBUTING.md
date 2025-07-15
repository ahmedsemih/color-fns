# Contributing to Color-kit

Thank you for your interest in contributing to **color-kit**! This document will help you get started with contributing and explains the guidelines we follow.

## What We're Looking For

- 🐛 **Bug fixes**: Help us fix issues
- ✨ **New color utility functions**: Add useful features for color conversion, parsing, validation, etc.
- 📚 **Documentation**: Improve or add examples, explanations, and guides
- ✅ **Tests**: Increase test coverage for existing or new features

## Development Guide

### Setup

1. Fork the repository
2. Clone your fork (replace YOUR-USERNAME with your GitHub username):

   ```bash
   git clone https://github.com/YOUR-USERNAME/color-kit.git
   ```

3. Navigate to the project directory:
   ```bash
   cd color-kit
   ```
4. Install dependencies:

   ```bash
    npm install
   ```

### Making Changes

1. Create a new branch for your feature or fix:

   ```bash
   git checkout -b feature/amazing-feature
   ```

2. Implement your changes

3. Keep code clean, simple, and consistent with existing style

4. Add JSDoc comments for new functions

5. Write tests for any new functionality

6. Update the [API Reference](README.md) section if your change introduces new public functions or modifies existing ones.

### Submitting Changes

1. Run prettier to format your code:

   ```bash
   npm run format
   ```

2. Run linter to check for code quality:

   ```bash
   npm run lint
   ```

3. Run tests to ensure everything works:

   ```bash
   npm test
   ```

4. Commit your changes with a clear message:

   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. Push your branch to your fork:

   ```bash
   git push origin feature/amazing-feature
   ```

6. Open a pull request to the `main` branch of the original repository with:
   - A clear title and description
   - Reference any related issues (e.g. "Fixes #123")
   - Mention clearly if your change introduces breaking behavior (e.g. API changes or removed features)

## Questions or Help?

If you have any questions or need help, feel free to open an issue. We’re happy to assist!

---

By contributing, you agree to license your contributions under the [MIT License](LICENSE).
