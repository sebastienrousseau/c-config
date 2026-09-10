# `@sebastienrousseau/c-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/c-config`.

---

## Description

Shareable C configuration standards providing modern C23 clang-format and strict clang-tidy rules.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/c-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .clang-format

- **Description**: Deterministic C23 formatting configuration enforcing 4-space indentation, 100-character line length, and sorted includes.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. .clang-tidy

- **Description**: Exhaustive static analysis preset enabling CERT, bugprone, readability, and performance diagnostic checks.
- **Scope**: Production & Development
- **Status**: Stable & Active
