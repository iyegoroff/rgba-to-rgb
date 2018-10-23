import rgbaToRgb from '../src'

test(`rgbaToRgb('rgb(255, 120, 5)', 'rgba(123, 233, 33, 0.5)') === 'rgb(189, 177, 19)'`, () => {
  expect(rgbaToRgb('rgb(255, 120, 5)', 'rgba(123, 233, 33, 0.5)')).toEqual('rgb(189, 177, 19)')
})
