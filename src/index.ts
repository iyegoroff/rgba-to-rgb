import * as invariant from 'invariant'

export default (background: string = '', color: string = '') => {
  const b = background.match(/rgb\((-?\d{1,3}),\s*(-?\d{1,3}),\s*(-?\d{1,3})\)/)
  const c = color.match(/rgba\((-?\d{1,3}),\s*(-?\d{1,3}),\s*(-?\d{1,3}),\s*([0-1]?(?:\.\d+)?)\)/)

  invariant(
    b !== null && b.length === 4,
    `rgba-to-rgb: background should be in 'rgb(r, g, b)' format, got '${background}'.`
  )

  invariant(
    c !== null && c.length === 5,
    `rgba-to-rgb: color should be in 'rgba(r, g, b, a)' format, got '${color}'.`
  )

  const [, bRed, bGreen, bBlue] = b!
  const [, cRed, cGreen, cBlue, cAlpha] = c!

  const red = (1 - +cAlpha) * +bRed + +cAlpha * +cRed
  const green = (1 - +cAlpha) * +bGreen + +cAlpha * +cGreen
  const blue = (1 - +cAlpha) * +bBlue + +cAlpha * +cBlue

  return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}
