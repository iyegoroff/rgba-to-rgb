# rgba-to-rgb
[![npm version](https://badge.fury.io/js/rgba-to-rgb.svg?t=1495378566925)](https://badge.fury.io/js/rgba-to-rgb)
[![CircleCI](https://circleci.com/gh/iyegoroff/rgba-to-rgb.svg?style=svg)](https://circleci.com/gh/iyegoroff/rgba-to-rgb)
[![codecov](https://codecov.io/gh/iyegoroff/rgba-to-rgb/branch/master/graph/badge.svg?t=1520230083925)](https://codecov.io/gh/iyegoroff/rgba-to-rgb)
[![Dependency Status](https://david-dm.org/iyegoroff/rgba-to-rgb.svg?t=1495378566925)](https://david-dm.org/iyegoroff/rgba-to-rgb)
[![devDependencies Status](https://david-dm.org/iyegoroff/rgba-to-rgb/dev-status.svg)](https://david-dm.org/iyegoroff/rgba-to-rgb?type=dev)
[![npm](https://img.shields.io/npm/l/express.svg?t=1495378566925)](https://www.npmjs.com/package/rgba-to-rgb)

Color conversion function

## Usage

```js
import rgbaToRgb from 'rgba-to-rgb'

const RGB_background = 'rgb(255, 120, 5)'
const RGBA_color = 'rgba(123, 233, 33, 0.5)'
const RGB_color = rgbaToRgb(RGB_background, RGBA_color) // rgb(189, 177, 19)
```

## Credits

Based on [rgba2rgb example](https://marcodiiga.github.io/rgba2rgb/rgba2rgb.html) by @marcodiiga
