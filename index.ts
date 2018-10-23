import * as invariant from 'invariant'

export default (background: string, color: string) => {
  const b = background.match(/rgb\((-?\d{1,3}),\s*(-?\d{1,3}),\s*(-?\d{1,3})\)/)
  const c = color.match(/rgba\((-?\d{1,3}),\s*(-?\d{1,3}),\s*(-?\d{1,3}),\s*([0-1]?(?:\.\d+)?)\)/)
  const bIsValid = b !== null && b.length === 4
  const cIsValid = c !== null && c.length === 5

  if (bIsValid && cIsValid) {
    const [, bRed, bGreen, bBlue] = b!
    const [, cRed, cGreen, cBlue, cAlpha] = c!

    const red = (1 - +cAlpha) * +bRed + +cAlpha * +cRed
    const green = (1 - +cAlpha) * +bGreen + +cAlpha * +cGreen
    const blue = (1 - +cAlpha) * +bBlue + +cAlpha * +cBlue

    return `rgb(${red}, ${green}, ${blue})`
  }

  invariant(bIsValid, `rgba-to-rgb: background should be in 'rgb(r, g, b)' format.`)
  invariant(cIsValid, `rgba-to-rgb: color should be in 'rgba(r, g, b, a)' format.`)
}
