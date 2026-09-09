---
title: "Usage — @sebastienrousseau/c-config"
description: "How to use and configure @sebastienrousseau/c-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/c-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/c-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/c-config";
console.log(config.defaultPreset);
```
